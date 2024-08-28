# Azure Function: Time-Triggered Elasticsearch Backup

## Overview

This Azure Function is a time-triggered script designed to automatically create a backup of Elasticsearch indices at a specified time. It iterates over multiple environments and initiates a backup operation for each one using a helper function.

## Components

### 1. Timer Trigger Function

The timer trigger function is set to execute at a defined schedule (e.g., daily at midnight). The function performs the following tasks:

-   **Initialize Logger**: Sets up logging for tracking the execution and status of the backup process.
-   **Check for Overdue Execution**: Logs a message if the function execution is delayed.
-   **Iterate Over Environments**: Iterates through the list of environments configured for the backup.
-   **Invoke Backup Function**: Calls the `runAppBackup` function for each environment to initiate the backup.
-   **Error Handling**: Catches and logs errors both for individual environments and the overall function execution.

### 2. Backup Execution Helper Function (`runAppBackup`)

This function handles the logic for creating a backup for each Elasticsearch environment. It performs the following steps:

-   **Format Current Date**: Gets the current date in a specific format (MMDDYY) to use in the backup naming.
-   **Prepare Backup Request**: Constructs the backup request using the environment configuration, including Elasticsearch URL, credentials, and backup name.
-   **Submit Backup Request**: Sends a `PUT` request to the Elasticsearch endpoint to initiate the backup.
-   **Monitor Backup Status**: Repeatedly checks the backup status by polling the Elasticsearch endpoint every 59 seconds until it is either successful or encounters an error.
-   **Log Status Updates**: Logs the backup status updates and final success or failure message.
-   **Error Handling**: Captures and logs any errors encountered during the backup process.

## Configuration

-   **Timer Schedule**: The schedule for triggering the function is defined in the `function.json` configuration file. A CRON expression can specify the desired schedule (e.g., `"0 0 * * *"` for midnight daily).

## Logging

The function utilizes a centralized logging utility to log the following actions:

-   **Function Start**: Indicates the start of the function.
-   **Backup Initiation**: Logs when a backup operation is started for an environment.
-   **Backup Status**: Periodically logs the current status of the backup.
-   **Backup Completion**: Logs when a backup operation completes successfully.
-   **Errors**: Captures any errors that occur during the process, including network issues, authentication errors, or failures in the backup operation.

## Dependencies

-   **Axios**: Used for making HTTP requests to Elasticsearch.
-   **Logger**: Custom logging utility for structured logging.
-   **Environment Configuration**: Contains the configuration details for different environments, such as Elasticsearch URLs and credentials.

## Usage

1. **Deploy** the function to Azure with the appropriate configuration for your environment.
2. **Monitor Logs**: Use Azure Monitor or other logging tools to monitor the function's execution and ensure backups are being created successfully.
3. **Adjust Schedule**: Modify the CRON expression in the `function.json` file as needed to change the backup frequency.
