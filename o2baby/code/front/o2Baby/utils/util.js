/**
 * @class 时间工具类
 */
class DateUtils {
    constructor() {
        this.formatTime = this.formatTime.bind(this);
    }

    static toTimeStamp(date) {
        if (date instanceof 'Date') {
            Math.round(date.getTime() / 1000)
        } else {
            Math.round((new Date()).getTime() / 1000);
        }
    }

    /**
     * 格式化日期
     * 格式为 yyyy-mm-dd
     * @param timeStamp(10位) 时间戳
     */
    static formatDate(timeStamp) {
        let unixTimestamp = new Date(timeStamp * 1000);
        let date = unixTimestamp.toLocaleDateString();
        console.log(date);
        let year = date.getFullYear();
        let monthTemp = date.getMonth() + 1;
        let dayTemp = date.getDate();
        let month = monthTemp > 9 ? monthTemp : '0' + monthTemp;
        let day = dayTemp > 9 ? dayTemp : '0' + dayTemp;
        return [year, month, day].map((n) => {
            return n.toString();
        }).join('-');
    }

    /**
     * 格式化时间 格式为 yyyy-mm-dd hh:mm
     * @param timeStamp 时间戳
     */
    static formatTime(timeStamp) {
        let unixTimestamp = new Date(timeStamp * 1000);
        let date = unixTimestamp.toLocaleTimeString();
        let hour = date.getHours();
        let minute = date.getMinutes();
        return ` ${this.formatDate(timeStamp)} ${hour}:${minute}`;
    }
}

export {
    DateUtils
};
