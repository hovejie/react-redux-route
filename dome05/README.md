# Redux Async Example

这是一个点击创建列表，点击列表进行标记删除，然后在进行筛选列表是否标记进行展示的案例；案例中使用react+redux实现；
### 目录结构
.
├─ build/            # build 生成的生产环境下的项目
├─ app/              # 源码目录
│   ├─ component/     # 组件（COMPONENT）
│   ├─ actions/      # ACTION
│   ├─ reducers/     # REDUCER
│   ├─ store/        # STORE
│   ├── app.js         # 启动文件
├── static/          # 放置无需经由 Webpack 处理的静态文件
├── .babelrc         # Babel 转码配置
├── .webpack.config  # webpack 配置文件
├── package.json     # npm依赖包配置
├── index.html       # 静态基页
```
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

