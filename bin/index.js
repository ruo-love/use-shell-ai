#! /usr/bin/env node
const { program } = require("commander");
program.version("1.0.0").name(`
    欢迎使用 use-shell-ai \n
`);

program
  .description("配置模型")
  .command("config")
  .action(require("./actions/config"));

program
  .description("开始问答")
  .command("q <question>")
  .action(require("./actions/chat"));
program.parse(process.argv);
