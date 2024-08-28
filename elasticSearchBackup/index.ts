import { AzureFunction, Context } from '@azure/functions';
import { initLogger, logger } from 'common-integration-packages';
import { runAppBackup } from '../common/engines/runAppBackup';
import { environments } from '../common/utilities/environmentsConfig';
import { LogActions } from '../app.constants';

const timerTrigger: AzureFunction = async function (context: Context, myTimer: any): Promise<void> {
    initLogger(context);

    if (myTimer.isPastDue) {
        context.log('🦥 Timer function is running late! 🦥');
    }

    logger.info({
        key: LogActions.START_FUNCTION,
        message: `⏱️ Timer function processed request. ⏱️`
    });

    try {
        for (const environment of Object.keys(environments)) {
            try {
                logger.info({
                    key: LogActions.RUNNING_BACKUP,
                    message: `🚀 Running backup for ${environment} 🚀`
                });

                await runAppBackup(environment);

                logger.info({
                    key: LogActions.RUNNING_BACKUP,
                    message: `Backup for ${environment} completed `
                });
            } catch (error) {
                logger.error({
                    key: LogActions.BACKUP_ERROR,
                    error: `Error during backup for ${environment}: ${error.message}`
                });
            }
        }
    } catch (error) {
        logger.error({
            key: LogActions.BACKUP_ERROR,
            error: `Error in the main function: ${error.message}`
        });
        return;
    }
};

export default timerTrigger;
