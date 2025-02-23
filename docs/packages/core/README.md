# `@ailhc/egf-core`

## 简介

EasyGameFramework 的核心模块，用于H5游戏/应用程序的渐进式模块化开发

EasyGameFramework core module for progressive modular development of H5 games/applications
## 特性
1. 模块注册、初始化管理机制
2. 智能提示

## Demo

1. [CocosCreator2.4.2 模板](https://github.com/AILHC/egf-ccc-empty)
2. [CocosCreator3D 1.2 模板](https://github.com/AILHC/egf-ccc3d-empty) (ps:使用systemjs+插件模式使用)
3. [CocosCreator3.0 模板](https://github.com/AILHC/egf-ccc3-empty) (ps:使用npm方式使用)
4. [Egret 5.3 支持npm的模板](https://github.com/AILHC/egf-egret-empty)
5. [Laya 2.7.1 支持npm的模板](https://github.com/AILHC/egf-laya-empty)

## 使用
0. 安装
    
    通过npm安装 
    npm install @ailhc/egf-core

    如果支持使用npm模块，则 通过导入npm模块的方式
    ```ts
    import { App } from "@ailhc/egf-core"

    ```
    如果不支持，则使用dist下的iife格式，声明文件则需要自己整理一下
    或者直接复制src下的源码

1. 基础使用
    ```ts
    export class XXXLoader implements egf.IBootLoader {
        onBoot(app: egf.IApp, bootEnd: egf.BootEndCallback): void {
            app.loadModule(moduleIns,"moduleName");
            bootEnd(true);
        }

    }

    import { App } from "@ailhc/egf-core"
    const app = new App();
    //启动
    app.bootstrap([new XXXLoader()]);
    //初始化
    app.init();
    ```
2. 智能提示和接口提示
    ```ts
    //智能提示的基础，可以在任意模块文件里进行声明比如
    //ModuleA.ts
    declare global {
        interface IModuleMap {
            moduleAName :IXXXModuleA
        }
    }
    //ModuleB.ts
    declare global {
        interface IModuleMap {
            moduleBName :IXXXModuleB
        }
    }

    const app = new App<IModuleMap>();
    //在运行时也可调用,这里的moduleIns可以是任意实例，moduleName可以有智能提示
    app.loadModule(moduleIns,"moduleName");
    ```
3. 全局模块调用
    ```ts
    // 可以将模块实例的字典赋值给全局的对象，比如
    //setModuleMap.ts
    export let m: IModuleMap;
    export function setModuleMap(moduleMap: IModuleMap) {
        m = moduleMap;
    }
    //AppMain.ts
    import { setModuleMap, m } from "./ModuleMap";

    setModuleMap(app.moduleMap); 

    //在别的逻辑里可以通过
    import { m } from "./ModuleMap";
    //调用模块逻辑
    m.moduleA.doSometing()
    ```
## [CHANGELOG](packages/core/CHANGELOG.md)

## 我在哪？

**游戏开发之路有趣但不易,**

**玩起来才能一直热情洋溢。**

关注我, 一起玩转游戏开发！

你的关注是我持续更新的动力~

让我们在这游戏开发的道路上并肩前行

在以下这些渠道可以找到我和我的创作:

公众号搜索:玩转游戏开发

或扫码:<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/abd0c14c9c954e56af20adb71fa00da9~tplv-k3u1fbpfcp-zoom-1.image" alt="img" style="zoom:50%;" />



一起讨论技术的 QQ 群: 1103157878



博客主页: https://pgd.vercel.app/

掘金: https://juejin.cn/user/3069492195769469

github: https://github.com/AILHC