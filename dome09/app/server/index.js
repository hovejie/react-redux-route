/**
 * Created by xdata on 8/28.
 */
// import fetch from 'isomorphic-fetch';
const ajax = (options)=> {
    var _options = {
        url : options.url,
        success(date){
            return options.success(date);
        }
    };
    let date = async function (_options) {
        return await fetch(_options.url)
            .then(response => response.json())
            .then(json => {
                return _options.success(json)
            });
    };

    return date(_options);
}
class Server {

    getContent (reddit) {
        return ajax({
            url: `https://www.reddit.com/r/${reddit}.json`,
            success: function(date){
                let list = date.data.children.map(child => child.data);// 取出所需数据
                return list;
            }
        })
    }

};
export default new Server();