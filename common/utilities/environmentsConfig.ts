import {
    ELASTIC_SEARCH_PASSWORD_QA,
    ELASTIC_SEARCH_PASSWORD_UAT,
    ELASTIC_SEARCH_PASSWORD_PROD,
    ELASTIC_SEARCH_USERNAME,
    ELASTIC_SEARCH_HOST_PROD,
    ELASTIC_SEARCH_HOST_QA,
    ELASTIC_SEARCH_HOST_UAT
} from '../../app.constants';

export interface EnvironmentConfig {
    elasticSearchURL: string;
    backupUsername: string;
    backupPassword: string;
}

export const getMMDDYYFormat = () => {
    const today = new Date();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    const year = today.getFullYear().toString().substr(-2);

    return `${month}${day}${year}`;
};

export const environments: { [key: string]: EnvironmentConfig } = {
    qa: {
        elasticSearchURL: `${ELASTIC_SEARCH_HOST_QA}/_snapshot/my_backup/snapshot`,
        backupUsername: ELASTIC_SEARCH_USERNAME,
        backupPassword: ELASTIC_SEARCH_PASSWORD_QA
    },
    uat: {
        elasticSearchURL: `${ELASTIC_SEARCH_HOST_UAT}/_snapshot/my_backup/snapshot`,
        backupUsername: ELASTIC_SEARCH_USERNAME,
        backupPassword: ELASTIC_SEARCH_PASSWORD_UAT
    },
    prod: {
        elasticSearchURL: `${ELASTIC_SEARCH_HOST_PROD}/_snapshot/my_backup/snapshot`,
        backupUsername: ELASTIC_SEARCH_USERNAME,
        backupPassword: ELASTIC_SEARCH_PASSWORD_PROD
    }
};
