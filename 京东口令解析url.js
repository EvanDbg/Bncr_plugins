/**
 * @author Aming
 * @description 解析京东口令
 * @origin 红灯区
 * @version v1.0.1
 * @name 京东口令解析url
 * @rule ^(jd|pz)jx([\s\S]+)$
 * @priority 100000
 * @admin true
 * @public false
 *
 * 说明：
 * 解析jd口令：jdjx ?
 * 格式化膨胀：pzjx ?
 * 自动遮掩邀请人的PIN，只保留前1后1
 *
 *
 * 自定义：
 * 膨胀解析 默认格式化成bbk的助力格式CXJ_PZ_INVITE_CODES
 * 自定义变量名格式：
 * set AmingScript PZexportName ?
 * 兔子：
 * set AmingScript PZexportName PZ_CODE
 *
 * 接口为诺兰公义接口,为了防止滥用,本插件超授可用
 *
 */

/** Code Encryption Block[419fd178b7a37c9eae7b7426c4a04203ffb59abcd2f0bffff50724deee82706efd63651959b48178e1b79090cdf50882efd24c71707e832e7bfdb98485a9a1d9f818adf6d127c7e03bd460a8d5d41497b98b9bb6b6d811150e097ce6eca2a078117f33276f5aef4f02646b19fb2f640b590c19e1711476473ebbe729c6431719c55fcd7516ec8333f29180022b6e95dc5fb976cd647fda069f13325c55263a6264da465b2fb1f34bca4cc8829f71b5375466b0688c9d0820c40dc5f27d12ce1f32ca1518908683b8f3abd78bb8cd088d831443546c52cb18c5bce4c2d1b726d7f80f7f9c5168ce4cfd1623342cb5e7eac760a077caf6edcd5a50a5c767a6777cf41284f7ab5edf9fc54b8aad620cc458b7d8f806f172d31e40834dd2a40268c1c59b95747188d7ee11859bf1a46218c7bc9ab78c08c882554e743675d4034fba9eaca72f26ec4361827f082930311caf78ffe2b2cc7069d4133b572275c77ff731708e7b4247872dc66711c93f49f319883e8ce10ef2a2350d6b521d4e02e87e6542210c1ce997446a9bfb61423b986eea386ba738712dac96e3ef89820b999840bb9ffa3572ee64f685221149ef560de4947514e588a56fd46fd958b58b04e2b146a668e56d5afd11c0334d153ae179a013eb3b39d3657845aebcc769565fc7f94e377e17c4018ba7e6a02856c63e09112a3684f0d4bb965ba3df83cc1f8fdc9527c1942fbb33b26312ba957da0bf81f7893ec2b1725ca83b8b0b13c9de497a970e201ef27c3854d1045ac87170081fc89efab5e08da6559022d94d0252f23539d62facec4795e3c1ce37c7d703d8d63ab38296b2eb051913d4331c59b7df566694e8b0d882000c18730aaa9111a71d976b284cb7335af985fe5c2c070568a3013adc90c4cd844cad9d0647670b5b072d2f61f43c071f581f693579a77b281b2d42831740e99b951b8338880e681e1472396d36490678c05c76f317d0f5219cf90344925a3f0dda810b503eaf6a56180409b939b238aa62a609d2178ade1a1f18b66ca61038e3fd72b4f0566fd83a8add2a99e64401493b137318af014ad5a86d741a258253efabfa9d984e8a338e758697b14464ab4ffec68fcd67da6fb6bc0844374454f45f08cb7623ec6899a22c2b44294c6ced82538a56573739c10af3ec8ec49cb0df757bdcab9a011205bd40148f1981d5678b8cb3cc372be83c11983155e3e916c7556ef436617b3217a0dda98b2b3f53aca4809668891fe43b47db9368555634879f68e028a6a0aa95a4bc50557e55ca6e713af038348c671809675bd1ed9b1742d89ad5ec9ae91b3ffc3b3703d3bf8c5ad4297f4813c8a2e67e9dce2d0ff8b52a7080c8a38b85d07cb7a5b70a9b9266220cc2086e6b6ec385595e6788938bfb5ea32dc73650cc04146e4c9b8fff23503f5b5cbec7906684188b13267f8f932817b052bd30b834e77dbcd1b3d828d282c5239bc1c73495c797ccbf74a13a843334730b243e9caf17787830a1570a08ad5da07c3a4f61a06051a5d1b98417e6867d2145909cd99ce95ecd661cd24142de08302bcb6e790f02e21ce8f0a83429eeb0fdc198905d18e7e37616cbe7e92cca06eec0ff141917e9313ba56d41bda476ecc4328dd2d03081e49629f062e00a718fba0b0aafa8a07a12c160265b05e497f74c16f7787f2ef9593d778129c3ebbba4d989a0f569b896bbc6dbea000d47caf3e43e977cb7bee0a2cb9f] */
