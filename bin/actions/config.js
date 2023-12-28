const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
module.exports = async function addProject() {
  const config = require("../config/index.json");
  const questions = [
    {
      type: "list",
      name: "model", // 存储答案的键
      message: "选择你要配置的模型",
      choices: ["Zhipu-ai"],
    },
    {
      type: "input",
      name: "API_KEY",
      message: "请输入该模型的API key",
    },
    {
      type: "confirm",
      name: "confirm",
      message: "确定当前配置吗？",
      default: false,
    },
  ];
  const { model, API_KEY, confirm } = await inquirer.prompt(questions);
  if (confirm) {
    config.models[model].API_KEY = API_KEY;
    fs.writeFileSync(
      path.resolve(__dirname, "../config/index.json"),
      JSON.stringify(config)
    );
  }
};
