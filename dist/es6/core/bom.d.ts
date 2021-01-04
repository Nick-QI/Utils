/**
 *  复制文字
 *  TODO:可能有兼容问题,目前在 PC端未发现,待真实环境测试
 * @param {*} dom 需要复制的文字 dom
 * @return  Boolean 值, true 则为复制成功, false 失败
 */
declare function copy(dom: HTMLDocument): boolean;
/**
 * location.search 上获取name值
 * @param name
 * @return String || null
 */
declare function getQueryString(name: any): string | null;
export { copy, getQueryString };
