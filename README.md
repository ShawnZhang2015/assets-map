将assets-map复制到Cocos Creator 2.x工程packagets目录，在使用iOS、Android构建后，在工程temp目录会生成一个assets-map.json的文件，它是assets资源与build资源的一个映射关系表，大概内容如下：

```
[
    {
        "nativePath": "res/raw-assets/71/71561142-4c83-4933-afca-cb7a17f67053.png",
        "url": "internal/image/default_btn_disabled.png/default_btn_disabled"
    },
    {
        "nativePath": "res/raw-assets/e8/e851e89b-faa2-4484-bea6-5c01dd9f06e2.png",
        "url": "internal/image/default_btn_normal.png/default_btn_normal"
    },
    {
        "nativePath": "res/raw-assets/ae/ae8e3d60-767e-493b-8a4d-6b564e7ecab0.png",
        "url": "main menu/back icon.png/back icon"
    },
    {
        "nativePath": "res/raw-assets/5d/5de7dc2b-df4c-404d-9f68-d799da224356.png",
        "url": "main menu/eject_btn.png/eject_btn"
    },
    {
        "nativePath": "res/raw-assets/03/038a47ce-d322-4654-a80d-0419c739168f.png",
        "url": "main menu/help_btn.png/help_btn"
    },
    {
        "nativePath": "res/raw-assets/a9/a91e438f-38c3-4cc9-9f86-3138b2afdafa.png",
        "url": "main menu/next_scene.png/next_scene"
    },
    {
        "nativePath": "res/raw-assets/68/68a612ed-3e86-43c2-8883-535bc7711af4.png",
        "url": "main menu/prev_scene.png/prev_scene"
    },
    {
        "nativePath": "res/raw-assets/46/46533172-baae-475f-af98-2eec76ef9acd.png",
        "url": "main menu/search_btn.png/search_btn"
    },
    {
        "nativePath": "res/raw-assets/22/224ce6e8-0e32-430a-9807-9452fc769ac9.png",
        "url": "res/atlas/emoji.plist/emoji1.png"
    },
    {
        "nativePath": "res/raw-assets/22/224ce6e8-0e32-430a-9807-9452fc769ac9.png",
        "url": "res/atlas/emoji.plist/emoji2.png"
    },
    {
        "nativePath": "res/raw-assets/22/224ce6e8-0e32-430a-9807-9452fc769ac9.png",
        "url": "res/atlas/emoji.plist/emoji3.png"
    },
    {
        "nativePath": "res/raw-assets/83/83e05166-d611-452a-ac2f-4cbf5c3d5a06.png",
        "url": "res/atlas/sheep.plist/sheep_down_0.png"
    },
    {
        "nativePath": "res/raw-assets/83/83e05166-d611-452a-ac2f-4cbf5c3d5a06.png",
        "url": "res/atlas/sheep.plist/sheep_run_0.png"
    },
    {
        "nativePath": "res/raw-assets/83/83e05166-d611-452a-ac2f-4cbf5c3d5a06.png",
        "url": "res/atlas/sheep.plist/sheep_run_1.png"
    },
    {
        "nativePath": "res/raw-assets/5b/5b8b3298-c604-480a-a3f6-c7522f98b0ff.png",
        "url": "res/imported/hexa.tmx"
    },
    {
        "nativePath": "res/raw-assets/5b/5b9cbc23-76b3-41ff-9953-4219fdbea72c/Fontin-SmallCaps.ttf",
        "url": "resources/font/Fontin-SmallCaps.ttf"
    }
]
```