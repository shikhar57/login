/**
 * base class for API object
 */
import {CONFIG} from '../../configs/configs';


export default class API {
    constructor(method = 'POST', timeout = 5000, auth = false) {
        this.code = null;
        this.message = null;
        this.domain = null;
        this.method = method;
        this.timeout = timeout;
        this.auth = auth;
    }

    toString() {
        return `( code: ${this.code} message: ${this.message} domain: ${this.domain} method: ${this.method} timeout: ${this.timeout} auth: ${this.auth}`;
    }

    apiEndPoint() {
        return CONFIG.apiEndPoint;
    }
    apiUploadEndPoint() {
        return CONFIG.UPLOAD_URL;
    }
    processResponse(res) {
        if (res && res.code && res.message && res.domain) {
            this.code = res.code;
            this.message = res.message;
            this.domain = res.domain;
        }
    }
}