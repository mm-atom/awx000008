
/**
 * 调起客户端扫码界面进行扫码
 * @see [微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api/wx.scanCode.html)
 * @param onlyFromCamera [boolean] 是否只能从相机扫码，不允许从相册选择图片
 */
export default function scan_code(onlyFromCamera?: boolean) {
	return new Promise<wx.ScanCodeData>((resolve, reject) => {
		wx.scanCode({
			onlyFromCamera,				// 是否只能从相机扫码，不允许从相册选择图片
			fail(err) {
				reject(err);
			},
			success(res) {
				resolve(res);
			}
		});
	});
}
