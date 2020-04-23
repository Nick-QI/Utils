interface Day {
    date: Date;
    data: {
        day: string;
        week: number;
        current: boolean;
    };
}
/**
 * 返回月份数据
 * @param date Date 对象 或 可被new Date对象解析;
 * @param weekStart number 周开始 0 - 6 ,默认0 从周日开始
 * @return Day[]
 */
declare function createMonth(date: Date | number | string, weekStart?: number): Day[];
export { createMonth };
