/**
 *  等分切割数组
 *
 * @static
 * @param {*} arr 数组
 * @param {*} limit 份数
 * @returns
 */
declare function sliceArray(arr: any[], limit: number): any[];
/**
 * 过滤url search 中的字符串
 * @param url
 * @param keys
 */
declare function filterUrlSearch(url: string, keys?: string[]): string;
/**
 * 检测时间是否重叠
 * 基本的思路，日期也可以当成字符串进行比较，把开始日期，结束日期分别存进两个数组，并用sort排序，循环遍历数组，从开始时间的第二个元素去比较结束时间的第一个元素，如果小于，就代表时间段有交叉，直接跳出，不然就继续遍历，遍历结束，说明时间没有重复，可以提交。
 * @param arr dateBeginEnd[] 数组对象,ex: [{s:1,e:2}]
 */
interface dateBeginEnd {
    s: number;
    e: number;
}
declare function checkOverlap(arr: dateBeginEnd[]): boolean;
/**
 * 返回对象类型, 首字母大写
 * @param variable any
 * @return String  (Object, Boolean, Number, String, Undefined, Null, Array, Function, Symbol)
 */
declare function getVarType(variable: any): string;
/**
 * 图片转化base64
 * @param img 图片dom
 */
declare function imageToBase64(img: any): string;
/**
 * 获取图片的base64
 * @param src 图片地址
 */
declare function getBase64Img(src: string): Promise<any>;
export { getVarType, sliceArray, checkOverlap, filterUrlSearch, getBase64Img, imageToBase64 };
