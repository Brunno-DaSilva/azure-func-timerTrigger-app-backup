import axios from 'axios';
import { EnvironmentConfig, environments, getMMDDYYFormat } from '../utilities/environmentsConfig';
import { LogActions } from '../../app.constants';
import { logger } from 'common-integration-packages';

export const runAppBackup = async (environment: string): Promise<void> => {
    const todaysDateMMDDYY = getMMDDYYFormat();
    const elasticVersion = 'v7';

    try {
        const config: EnvironmentConfig = environments[environment];

        const putResponse = await axios.put(
            `${config.elasticSearchURL}_${todaysDateMMDDYY}_${elasticVersion}`,
            {},
            {
                auth: {
                    username: config.backupUsername,
                    password: config.backupPassword
                }
            }
        );

        logger.info({
            key: LogActions.RUNNING_BACKUP,
            message: `Backup request submitted for ${environment}: ${putResponse.data}`
        });

        let status = '';

        while (status === 'IN_PROGRESS') {
            await new Promise((resolve) => setTimeout(resolve, 59000));

            const getResponse = await axios.get(
                `${config.elasticSearchURL}_${todaysDateMMDDYY}_${elasticVersion}`
            );

            status = getResponse.data.snapshots[0].state;

            logger.info({
                key: LogActions.BACKUP_STATUS,
                message: `Backup status for ${environment}: ${status}`
            });

            if (status === 'SUCCESS') {
                logger.info({
                    key: LogActions.BACKUP_COMPLETE,
                    message: `Backup for ${environment} completed successfully!`
                });

                break;
            }
        }
    } catch (error) {
        logger.error({
            key: LogActions.BACKUP_ERROR,
            error: `Error during backup for ${environment}: ${error.message}`
        });
    }
};
