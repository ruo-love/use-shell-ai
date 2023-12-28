const fs = require("fs");
const { callZhiPuAi } = require("../helpers/chat");

module.exports = async function addProject(question) {
  const { defaultModel, models } = require("../config/index.json");
  if (models[defaultModel].API_KEY.length === 0) {
    console.log(`请先配置${defaultModel}模型的API_KEY`);
    return;
  }
  const currentModel = defaultModel || Object.keys(models)[0];
  const { API_KEY } = models[currentModel];
  switch (currentModel) {
    case "Chat-gpt":
      console.log("Chat-gpt 模型对接 开发中");
      break;
    case "Zhipu-ai":
    default:
      callZhiPuAi(question, API_KEY);
      break;
  }
};
