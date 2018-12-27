export default {
    name: 'all',
    children: [
        {
            name: '图片',
            children: [
                {
                    name: 'image1.jpg'
                },
                {
                    name: '风景',
                    children: [
                        {
                            name: 'guilin.jpg'
                        },
                        {
                            name: 'hainan.jpg'
                        }
                    ]
                },
                {
                    name: 'image2.jpg'
                }
            ],
        },
        {
            name: '视频',
            children: [
                {
                    name: 'video1.mp4'
                },
                {
                    name: 'video2.mp4'
                }
            ]
        },
        {
            name: '文档',
            children: [
                {
                    name: 'document1.doc'
                },
                {
                    name: '小说',
                    children: [
                        {
                            name: 'novel.txt'
                        },
                        {
                            name: 'novel2.txt'
                        }
                    ]
                },
                {
                    name: 'document2.doc'
                }
            ]
        }
    ]
}