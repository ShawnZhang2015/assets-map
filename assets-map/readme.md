# pbkiller说明
pbkiller插件是为了在CocosCreator中简化protobufjs库的使用，并且可以让protobuffer工作在浏览器和jsb环境上。
# pbkiller安装
## 安装模式
pbkiller插件有两种安装模式：
- install-src：源码模式，此模式会将protobufjs原码导入项目中，不依赖任何外部文件。对npm不熟悉的用户推荐使用此模式安装。

- install-lite：简化模式，此模式需要提前安装*protobufjs npm*模块，安装命令：npm install protobufjs@5


安装完成后，会导入如下文件：
1. protobufjs源码（lite模式无此目录）
2. pbkiller源码、及fs/path伪装模块
3. 简单的测试场景和代码
4. 测试proto文件

下面是导入文件和目录结构：
```
pbkiller					
├── protobuf				protobufjs源码
│   ├── bytebuffer.js
│   ├── long.js
│   └── protobufjs.js
├── src					pbkiller源码
│   ├── fs.js				fs伪装
│   ├── path.js				path伪装
│   └── pbkiller.js			pbkillers核心代码
└── test
    ├── test-pbkiller.fire	测试场景
    └── test-pbkiller.js	测试组件代码
resources					
└── pb			        resource/pb是pbkiller默认的proto文件存放的根目录
    ├── ActionCode.proto
    ├── ChatMsg.proto
    ├── Player.json
    └── Player.proto
```

# 快速使用
## 导入模块
```
let pbkiller = require('pbkiller');
```

## 加载resources/pb目录下所有proto文件
```
//加载所有proto文件
let pb = pbkiller.loadAll(); 
//实例化proto中的Player对象
let player = new pb.grace.proto.msg.Player();
```

## 指定文件格式：[proto|json] 默认为proto
```
//注意json文件是由protobufjs提供的pbjs工个生成
let pb = pbkiller.loadAll('json');
```

## 指定编译的对象路径
```
let pb = pbkiller.loadAll('proto', 'grace.proto.msg');
cc.log(new pb.Player());
```

## 更新日志
####9.27
pbkiller增加loadData方法，加载本地二进制文件，主要用于加载本地被序列化后的protobuf数据


## 特别注意
在加载proto时可以使用扩展名为**.proto**和**.json**的文件，pbkiller支持两种混用，但需要特别注意的如果有proto之间有依赖关系，请保证依赖文件之间是相同的文件格式。
