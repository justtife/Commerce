import { createLogger, format, transports } from "winston";

const { combine, timestamp, label, printf, metadata, colorize } = format;
//Console Format
const consoleFormat = printf(({ level, label, timestamp, message }) => {
  return `[${level}] ${timestamp} ${label}:  ${message}`;
});
//Logger output Format for file(error messages)
const logFormat = format.printf(({ level, label, timestamp, ...meta }) => {
  return `[${level}] ${timestamp} ${label}: ${JSON.stringify(meta)}`;
});

//Development Logger
const devLogger = createLogger({
  format: combine(
    label({ label: "Teepha F&F Logger" }),
    timestamp({ format: "YY-MM-DD HH:mm:ss" }),
    metadata({ fillExcept: ["message", "level", "timestamp", "label"] })
  ),
  transports: [
    // Console - Log Every level of data
    new transports.Console({
      format: combine(colorize({ all: false, level: true }), consoleFormat),
    }),

    //File - Log error
    new transports.File({
      level: "info" as string,
      filename: "./src/utils/logError/devErr.log" as string,
      format: logFormat,
    }),
  ],
});
export default devLogger;
