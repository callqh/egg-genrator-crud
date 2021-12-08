import chalk from 'chalk';

/**
 * 错误信息
 * @param msg 输出消息
 */
export const error = (msg: string) => console.log(chalk.red(msg));

/**
 * 成功信息
 * @param msg 输出消息
 */
export const success = (msg: string) => console.log(chalk.green(msg));

/**
 * 警告信息
 * @param msg 输出消息
 */
export const warning = (msg: string) => console.log(chalk.yellowBright(msg));

/**
 * 主要信息
 * @param msg 输出消息
 */
export const primary = (msg: string) => console.log(chalk.blueBright(msg));
