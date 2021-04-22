import Cookies from 'js-cookie';

/* FETCH REQUESTS - to make fetch requests with any HTTP verb other than GET, 
must set an XSRF-TOKEN header on the request and the value of the header should
be set to the value of the XSRF-TOKEN cookie */

export async function csrfFetch(url, options = {}) {
    options.method = options.method || 'GET';

    options.headers = options.headers || {};

    if (options.method.toUpperCase() !== 'GET') {
        options.headers['Content-Type'] =
            options.headers['Content-Type'] || 'application/json';
        options.headers['XSRF-Token'] = Cookies.get('XSRF-TOKEN');
    }

    const res = await window.fetch(url, options);

    if (res.status >= 400) throw res;

    return res;
}

// Grab the "XSRF-TOKEN" cookie - should only be used in development!
export function restoreCSRF() {
    return csrfFetch('/api/csrf/restore');
}