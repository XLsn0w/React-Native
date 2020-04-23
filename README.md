# 欢迎使用 React Native

使用JavaScript和React编写原生移动应用
React Native使你只使用JavaScript也能编写原生移动应用。 它在设计原理上和React一致，通过声明式的组件机制来搭建丰富多彩的用户界面。
```
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class WhyReactNativeIsSoGreat extends Component {
  render() {
    return (
      <View>
        <Text>
          如果你喜欢在Web上使用React，那你也肯定会喜欢React Native.
        </Text>
        <Text>
          基本上就是用原生组件比如'View'和'Text'
          来代替web组件'div'和'span'。
        </Text>
      </View>
    );
  }
}
```
React Native应用是真正的移动应用
React Native产出的并不是“网页应用”， 或者说“HTML5应用”，又或者“混合应用”。 最终产品是一个真正的移动应用，从使用感受上和用Objective-C或Java编写的应用相比几乎是无法区分的。 React Native所使用的基础UI组件和原生应用完全一致。 你要做的就是把这些基础组件使用JavaScript和React的方式组合起来。
```
import React, { Component } from 'react';
import { Image, ScrollView, Text } from 'react-native';

class AwkwardScrollingImageWithText extends Component {
  render() {
    return (
      <ScrollView>
        <Image
          source={{uri: 'https://i.chzbgr.com/full/7345954048/h7E2C65F9/'}}
          style={{width: 320, height:180}}
        />
        <Text>
          在iOS上，React Native的ScrollView组件封装的是原生的UIScrollView。
          在Android上，封装的则是原生的ScrollView。

          在iOS上，React Native的Image组件封装的是原生的UIImageView。
          在Android上，封装的则是原生的ImageView。

          React Native封装了这些基础的原生组件，使你在得到媲美原生应用性能的同时，还能受益于React优雅的架构设计。 
        </Text>
      </ScrollView>
    );
  }
}
```
别再傻等编译了！
React Native让你可以快速迭代开发应用。 比起传统原生应用漫长的编译过程，现在你可以在瞬间刷新你的应用。开启Hot Reloading的话，甚至能在保持应用运行状态的情况下热替换新代码！ 试试看吧，包你双击666。


可随时呼叫原生外援
React Native完美兼容使用Objective-C、Java或是Swift编写的组件。 如果你需要针对应用的某一部分特别优化，中途换用原生代码编写也很容易。 想要应用的一部分用原生，一部分用React Native也完全没问题 —— Facebook的应用就是这么做的。
```
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { TheGreatestComponentInTheWorld } from './your-native-code';

class SomethingFast extends Component {
  render() {
    return (
      <View>
        <TheGreatestComponentInTheWorld />
        <Text>
          上面这个TheGreatestComponentInTheWorld组件完全可以使用原生Objective-C、
          Java或是Swift来编写 - 开发流程并无二致。
        </Text>
      </View>
    );
  }
}
```

欢迎使用 React Native！这篇文档会帮助你搭建基本的 React Native 开发环境。如果你已经搭好了环境，那么可以尝试一下编写 Hello World。

完整原生环境 简易沙盒环境
根据你所使用的操作系统、针对的目标平台不同，具体步骤有所不同。如果想同时开发 iOS 和 Android 也没问题，你只需要先选一个平台开始，另一个平台的环境搭建只是稍有不同。

如果阅读完本文档后还碰到很多环境搭建的问题，我们建议你还可以再看看求助讨论区。注意！视频教程或者其他网络上的博客和文章可能和本文档有所出入，请以最新版本的本文档所述为准！

开发平台： macOS Linux Windows
目标平台： iOS Android
安装依赖
必须安装的依赖有：Node、Watchman、Xcode和CocoaPods。

虽然你可以使用任何编辑器来开发应用（编写 js 代码），但你仍然必须安装 Xcode 来获得编译 iOS 应用所需的工具和环境。

Node, Watchman
我们推荐使用Homebrew来安装 Node 和 Watchman。在命令行中执行下列命令安装：

brew install node
brew install watchman
如果你已经安装了 Node，请检查其版本是否在 v12 以上。安装完 Node 后建议设置 npm 镜像（淘宝源）以加速后面的过程（或使用科学上网工具）。

注意：不要使用 cnpm！cnpm 安装的模块路径比较奇怪，packager 不能正常识别！

# 使用nrm工具切换淘宝源
npx nrm use taobao

# 如果之后需要切换回官方源可使用
npx nrm use npm
Watchman则是由 Facebook 提供的监视文件系统变更的工具。安装此工具可以提高开发时的性能（packager 可以快速捕捉文件的变化从而实现实时刷新）。

Yarn
Yarn是 Facebook 提供的替代 npm 的工具，可以加速 node 模块的下载。

npm install -g yarn
安装完 yarn 之后就可以用 yarn 代替 npm 了，例如用yarn代替npm install命令，用yarn add 某第三方库名代替npm install 某第三方库名。

Xcode
React Native 目前需要Xcode 10 或更高版本。你可以通过 App Store 或是到Apple 开发者官网上下载。这一步骤会同时安装 Xcode IDE、Xcode 的命令行工具和 iOS 模拟器。

Xcode 的命令行工具
启动 Xcode，并在Xcode | Preferences | Locations菜单中检查一下是否装有某个版本的Command Line Tools。Xcode 的命令行工具中包含一些必须的工具，比如git等。

Xcode Command Line Tools

CocoaPods
CocoaPods是用Ruby编写的包管理器。从0.60版本开始react native的iOS版本需要使用CocoaPods来管理依赖。你可以使用下面的命令来安装cocoapods。

当然安装可能也不顺利，请尝试翻墙或寻找一些国内可用的镜像源。

sudo gem install cocoapods
或者可以使用brew来安装

brew install cocoapods
另外目前最新版本似乎不能在ruby2.6版本以下安装，意味着如果你使用的macOS版本低于10.15 (Catalina) 则无法直接安装。可以尝试安装较旧一些的版本。如sudo gem install cocoapods -v 1.8.4，参考issue链接 https://github.com/CocoaPods/CocoaPods/issues/9568

要了解更多信息，可以访问CocoaPods的官网。

创建新项目
如果你之前全局安装过旧的react-native-cli命令行工具，请使用npm uninstall -g react-native-cli卸载掉它以避免一些冲突。

使用 React Native 内建的命令行工具来创建一个名为"AwesomeProject"的新项目。这个命令行工具不需要安装，可以直接用 node 自带的npx命令来使用（注意 init 命令默认会创建最新的版本）：

必须要看的注意事项一：0.45 及以上版本需要依赖 boost 等几个很难下载成功的第三方库编译，请务必使用稳定的代理软件。

必须要看的注意事项二：0.60 及以上版本依赖 CocoaPods 安装。CocoaPods 的仓库在国内也很难访问。如果在 CocoaPods 的安装步骤卡很久，可以试一下这个国内镜像

必须要看的注意事项三：请不要单独使用常见的关键字作为项目名（如 class, native, new, package 等等）。请不要使用与核心模块同名的项目名（如 react, react-native 等）。请不要在目录、文件名中使用中文、空格等特殊符号。

npx react-native init AwesomeProject
提示：你可以使用--version参数（注意是两个杠）创建指定版本的项目。例如npx react-native init MyApp --version 0.44.3。注意版本号必须精确到两个小数点。

如果你是想把 React Native 集成到现有的原生项目中，则步骤完全不同，请参考集成到现有原生应用。

编译并运行 React Native 应用
在你的项目目录中运行yarn ios或者yarn react-native run-ios：
```
cd AwesomeProject
yarn ios
```

# 或者
yarn react-native run-ios
提示：如果此命令无法正常运行，请使用 Xcode 运行来查看具体错误（run-ios 的报错没有任何具体信息）。注意 0.60 版本之后的主项目文件是.xcworkspace，不是.xcodeproj！

很快就应该能看到 iOS 模拟器自动启动并运行你的项目。

AwesomeProject on iOS

yarn react-native run-ios只是运行应用的方式之一。你也可以在 Xcode 中直接运行应用。注意 0.60 版本之后的主项目文件是.xcworkspace，不是.xcodeproj。

如果你无法正常运行，先回头仔细对照文档检查，然后可以看看讨论区。

在真机上运行
上面的命令会自动在 iOS 模拟器上运行应用，如果你想在真机上运行，则请阅读在设备上运行这篇文档。

修改项目
现在你已经成功运行了项目，我们可以开始尝试动手改一改了：

使用你喜欢的编辑器打开App.js并随便改上几行。
在 iOS 模拟器中按下⌘-R就可以刷新 APP 并看到你的最新修改！（如果没有反应，请检查模拟器的 Hardware 菜单中，connect hardware keyboard 选项是否选中开启）
完成了！
恭喜！你已经成功运行并修改了你的第一个 React Native 应用。


