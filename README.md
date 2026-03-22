   # 健康习惯追踪器

  一个基于React Native和Expo的健康习惯追踪移动应用，帮助用户记录和管理日常习惯，提供统计分析和提醒功能。

   ## 功能特点

   ✅ **习惯管理**
   - 添加、编辑、删除习惯
   - 分类管理（健康、运动、饮食、学习等）
   - 每日完成记录

   ✅ **数据统计**
   - 完成率统计图表
   - 连续天数追踪
   - 历史趋势分析
   - 个性化建议

   ✅ **提醒功能**
   - 定时推送通知
   - 背景任务调度
   - 完成里程碑提醒

   ✅ **本地存储**
   - SQLite本地数据库
   - 离线可用
   - 数据备份恢复

   ✅ **用户界面**
   - 响应式布局
   - 无障碍支持
   - 主题切换
   - 直观的数据展示

   ## 技术栈

   - React Native 0.74.5
   - Expo 52.0.0
   - TypeScript 5.6.2
   - React Navigation 7.0.0
   - SQLite (react-native-sqlite-storage)
   - Expo Notifications
   - React Native Chart Kit

   ## 快速开始

   ### 环境要求
   - Node.js >= 16
   - npm 或 yarn

   ### 安装
   ```bash# 克隆项目
   git clone https://github.com/<your-username>/health-habit-app.git

   # 安装依赖
   npm install

   # 或使用yarn
   yarn install
   ```

   ### 开发
   bash
   # 启动开发服务器
   npm start

   # 浏览器预览
   npm run web

   # Android预览
   npm run android

   # iOS预览
   npm run ios
   ```

   ### 构建
   ```bash
   # 构建Web版本
   expo build:web

   # 构建iOS应用
   expo build:ios

   # 构建Android应用
   expo build:android
   ```

   ## 项目结构

   ```
   health-habit-app/
   ├── src/
   │   ├── components/          # 通用组件
   │   │   └── Button.tsx        # 按钮组件
   │   ├── screens/             # 应用屏幕
   │   ├── DashboardScreen.tsx    # 主界面
   │   ├── HabitListScreen.tsx    # 习惯列表
   │   ├── HabitDetailScreen.tsx  # 习惯详情
   │   ├── StatisticsScreen.tsx   # 统计分析
   │   └── SettingsScreen.tsx     # 设置页面
   ├── services/   # 服务层
   ├── HabitService.ts  # 习惯管理服务
   ├── Database.ts      # 数据库服务
   └── NotificationService.ts # 通知服务
   ├── assets/                  # 资源文件
   ├── App.tsx                 # 主应用入口
   ├── app.json                # Expo配置
   ├── package.json            # npm依赖
   ├── babel.config.js        # Babel配置
   ├── tsconfig.json          # TypeScript配置
   ├── LICENSE                # MIT许可证
   └── README.md              # 项目文档
   ```

   ## 贡献指南

  欢迎贡献！请遵循以下步骤：

  1. Fork项目
  2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
  3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
  4. 推送到分支 (`git push origin feature/AmazingFeature`)
  5. 开启Pull Request

   ### 开发规范
   - 遵循TypeScript类型安全
   - 使用React Hook最佳实践
   - 保持组件简单和可复用
   - 添加必要的注释

   ## 许可证

  本项目基于MIT许可证发布 - 查看 [LICENSE](LICENSE) 文件了解更多信息。

   ## 致谢

  感谢以下开源项目：

   - [Expo](https://expo.dev/)
   - [React Native](https://reactnative.dev/)
   - [React Navigation](https://reactnavigation.org/)
   - [React Native SQLite](https://github.com/andpor/react-native-sqlite-storage)

   ## 支持

  如有问题或建议，请在GitHub Issues中提交。

   ## 截图预览

   ### Dashboard界面
   ![Dashboard Preview](https://img.shields.io/badge/Dashboard-007AFF?

---

**健康生活，从记录开始！** 🎯
