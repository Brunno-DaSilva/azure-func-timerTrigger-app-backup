export const BATCH_SIZE = process.env.BATCH_SIZE ? parseInt(process.env.BATCH_SIZE) : 100;

export const MAX_BATCH_SIZE = 10000;

export const EMPTY_CUSTOMER_CODE = `N/A`;

export const NBF_LEEWAY_SECONDS = 10;

export const AUDIT_URL = process.env.AUDIT_URL;
export const GRAPHQL_URL = process.env.GRAPHQL_URL;
export const MSAUTH_CLIENTID = process.env.MSAUTH_CLIENTID;
export const MSAUTH_SECRET = process.env.MSAUTH_SECRET;
export const MSAUTH_URL = process.env.MSAUTH_URL;
export const MSAUTH_SCOPE = process.env.MSAUTH_SCOPE;
export const AUTHPROXY_URL = process.env.AUTHPROXY_URL;

export const AUDITS_BUCKET_NAME = 'audits';

export const INTEGRATIONS_USER = process.env.INTEGRATIONS_USER;

export const config = {
    login_web: {
        auth0_base_url: process.env.AUTH0_BASE_URL || 'https://domain.us.auth0.com',
        auth0_response_type: 'code id_token token',
        auth0_response_mode: 'form_post',
        auth0_client_id: process.env.AUTH0_CLIENT_ID || '',
        auth0_scope: process.env.AUTH0_SCOPE || 'openid profile email offline_access',
        auth0_audience: process.env.AUTH0_AUDIENCE || '',
        auth0_audience_core: process.env.AUTH0_AUDIENCE || 'datahub-api',
        auth0_client_secret: process.env.AUTH0_CLIENT_SECRET || ''
    }
};

export enum LogActions {
    VALIDATE_TOKEN = 'VALIDATE_TOKEN',
    UNABLE_TO_VALIDATE_TOKEN = 'UNABLE TO VALIDATE TOKEN',
    DATAHUB_QUERY = 'DATAHUB_QUERY',
    DATAHUB_QUERY_ERROR = 'DATAHUB_QUERY_ERROR',
    DATAHUB_DELETE_QUERY = 'DATAHUB_DELETE_QUERY',
    DATAHUB_RESULTS = 'DATAHUB_RESULTS',
    ASSETS_API_CSV_DATA = 'ASSETS_API_CSV_DATA',
    ASSETS_API_JSON_DATA = 'ASSETS_API_JSON_DATA',
    DATAHUB_CONNECTION_ERROR = 'DATAHUB_CONNECTION_ERROR',
    DATAFEED_PROCESSOR = 'DATAFEED_PROCESSOR',
    DATAFEED_PROCESSOR_ERROR = 'DATAFEED_PROCESSOR_ERROR',
    DELETE_EVENTS = 'DELETE_EVENTS',
    AUTH_PROXY = 'AUTH_PROXY',
    AUDIT_PROCESS = 'AUDIT_PROCESS',
    AUTH0_RESPONSE = 'AUTH0_RESPONSE',
    API_REGISTRATION_ERROR = 'API_REGISTRATION_ERROR',
    API_UPDATE_ERROR = 'API_UPDATE_ERROR',
    API_DELETION_ERROR = 'API_DELETION_ERROR',
    AUTH0_QUERY = 'AUTH0_QUERY',
    AUTH0_ERROR = 'AUTH0_ERROR',
    DATA_FEED_API_ERROR = 'DATA_FEED_API_ERROR',
    SEND_ERROR_EMAIL_NOTIFICATION_STARTED = 'SEND_ERROR_EMAIL_NOTIFICATION_STARTED',
    SEND_ERROR_EMAIL_NOTIFICATION_COMPLETED = 'SEND_ERROR_EMAIL_NOTIFICATION_COMPLETED',
    SEND_ERROR_EMAIL_NOTIFICATION_END = 'SEND_ERROR_EMAIL_NOTIFICATION_END',
    DATA_FEED_API_INFO = 'DATA_FEED_API_INFO',
    INSERT_DATA_FEED_SUCCESS_MESSAGE = 'Log Entry: Data Feed Records Added Successfully',
    INSERT_DATA_FEED_SUCCESS = 'INSERT_DATA_FEED_SUCCESS',
    INSERT_DATA_FEED_ERROR_MESSAGE = 'Error Entry: Failed to add Data Feed Records',
    INSERT_DATA_FEED_ERROR = 'INSERT_DATA_FEED_ERROR',
    PROCESS_EVENTS = 'PROCESS_EVENTS',
    CUSTOM_FIELD_UPLOAD_MATCHING = 'CUSTOM_FIELD_UPLOAD_MATCHING',
    START_FUNCTION = 'START_FUNCTION',
    RUNNING_BACKUP = 'RUNNING_BACKUP',
    BACKUP_ERROR = 'BACKUP_ERROR',
    BACKUP_STATUS = 'BACKUP_STATUS',
    BACKUP_COMPLETE = 'BACKUP_COMPLETE'
}

export const ELASTIC_SEARCH_PASSWORD_PROD =
    process.env.ELASTIC_SEARCH_PASSWORD_PROD || 'hCHRwr9x3z5LkwH9xPbvsMCf';
export const ELASTIC_SEARCH_HOST_PROD =
    process.env.ELASTIC_SEARCH_HOST_PROD || 'https://10.0.244.137:9200';

export const ELASTIC_SEARCH_PASSWORD_UAT =
    process.env.ELASTIC_SEARCH_PASSWORD_UAT || 'aaLWFgxNc8SPZFV4QYH3rpZ3';
export const ELASTIC_SEARCH_HOST_UAT =
    process.env.ELASTIC_SEARCH_HOST_UAT || 'https://10.0.176.91:9200';

export const ELASTIC_SEARCH_PASSWORD_QA = process.env.ELASTIC_SEARCH_PASSWORD_QA || 'VlcuMuNwQOeQ';
export const ELASTIC_SEARCH_HOST_QA =
    process.env.ELASTIC_SEARCH_HOST_QA || 'https://10.0.95.230:9200';

export const ELASTIC_SEARCH_USERNAME = process.env.ELASTIC_SEARCH_USERNAME || 'elastic';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

export enum DATAFEED_STATUSES {
    COMPLETED = 'COMPLETED',
    PENDING = 'PENDING',
    ERROR = 'ERROR'
}

export const AUTH0_BASE_URL = process.env.AUTH0_BASE_URL || 'https://domain.us.auth0.com';

export const AUTH0_API_REGISTRATION_CLIENT_SECRET =
    process.env.AUTH0_API_REGISTRATION_CLIENT_SECRET || '';

export const AUTH0_API_REGISTRATION_AUDIENCE =
    process.env.AUTH0_API_REGISTRATION_AUDIENCE || 'https://domain.us.auth0.com/api/v2/';

export const AUTH0_API_REGISTRATION_CLIENT_ID = process.env.AUTH0_API_REGISTRATION_CLIENT_ID || '';

export const BLOB_STORAGE_URL = process.env.BLOB_STORAGE_URL;
export const DATAFEED_PROCESSOR_HOST_OUTPUT_CONTAINER =
    process.env.DATAFEED_PROCESSOR_HOST_OUTPUT_CONTAINER || 'datafeed-processor-host-ip-output';

// SQL Connectivity config

const DATAHUB_SQL_SERVER_URL =
    process.env.DATAHUB_SQL_SERVER_URL || 'svr-data-hub-qa.database.windows.net';
const DATAHUB_SQL_SERVER_DATABASE = process.env.DATAHUB_SQL_SERVER_DATABASE || 'db-data-hub-qa';
const DATAHUB_SQL_USERNAME = process.env.DATAHUB_SQL_USERNAME || 'datahubconnectorservice';
const DATAHUB_SQL_PASSWORD = process.env.DATAHUB_SQL_PASSWORD || 'hwXXj65G#IiSmPvI';

export const DATAHUB_SQL_DATABASE_CONFIG = {
    server: DATAHUB_SQL_SERVER_URL,
    database: DATAHUB_SQL_SERVER_DATABASE,
    userId: DATAHUB_SQL_USERNAME,
    password: DATAHUB_SQL_PASSWORD
};
