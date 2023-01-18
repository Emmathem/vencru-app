import moment from 'moment';
import { toast } from 'react-toastify';
import { getFromSessionStorage } from './browserStorage';

// export const CurrencySign = '$';

export const CurrencySign = '₦';


export const LOGGER = (key, value, isProd = process.env.NODE_ENV === 'production') => {
    if (isProd) {
        return;
    }
    // eslint-disable-next-line no-console
    console.log(key, value);
};

// Encrypting Security of User Profile
export const EncryptUserDetails = value => {
    const stringifyValue = JSON.stringify(value);
    return CryptoJS.AES.encrypt(stringifyValue, passphrase).toString();
};

// Decrypting and retrieving User Profile Object
export const GET_USER_TOKEN = () => {
    const getFromStorage = getFromSessionStorage('token');
    if (!getFromStorage) {
        return;
    }
    const profileByteDecrypt = CryptoJS.AES.decrypt(getFromStorage, passphrase);
    const toOriginalString = profileByteDecrypt.toString(CryptoJS.enc.Utf8);
    return toOriginalString ? JSON.parse(toOriginalString) : null;
};

export const CopierHelper = (obj, id, text) => {
    if (obj !== null) {
        const doc = document.getElementById(id);
        doc.focus();
        doc.select();
        document.execCommand('copy');

        navigator.clipboard.writeText(doc.value);

        toast.info(`${text} copied`);
    } else {
        toast.error('Failed to copy to clipboard, try again later');
    }
};

export const formatAmount = num => {
    if (num) {
        const initial = parseFloat(num).toFixed(2);
        return initial.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
};

export const formatNumber = num => {
    if (!num) {
        return;
    }
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const dateFormatterHandler = (dateStr, format = 'DD-MM-YYYY') => {
    if (!dateStr) {
        return undefined;
    }
    return moment(dateStr, format, true).isValid() ? moment(dateStr, format, true) : undefined;
};

export const GetFromNowDate = (dateValue, stringFormat, fromNow, format = 'DD-MM-YYYY') => {
    if (moment(dateValue, stringFormat).isValid()) {
        if (fromNow) {
            return moment(dateValue).fromNow();
        }
        return moment(dateValue, stringFormat).format(format);
    }
    return '';
};

export const GetNumberOfDaysInDates = (startdate, enddate) => {
    if (startdate === undefined && enddate === undefined) {
        throw new Error('Date not provided');
        // return;
    }
    const start = moment(startdate, 'YYYY-MM-DD');
    const end = moment(enddate, 'YYYY-MM-DD');
    return Math.abs(moment.duration(start.diff(end)).asDays());
};

export const GenerateString = length => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

// export const pdfWithPrintJs = (printable, documentTitle, type = 'image') => {
//     // const cssText = `
//     //   background-color: #ffffff
//     // `;
//     try {
//         html2canvas(document.getElementById(printable), {
//             logging: true,
//             allowTaint: true,
//             letterRendering: 1,
//             useCORS: true,
//             backgroundColor: 'white',
//         }).then(canvas => {
//             const imgData = canvas.toDataURL('image/jpeg', 1.0);
//             const config = {
//                 type,
//                 documentTitle,
//                 printable: imgData,
//                 base64: true,
//                 // targetStyle: [cssText],
//                 // maxWidth: 800,
//             };
//             printJs(config);
//         });
//     } catch (e) {
//         LOGGER('pdfWithPrintJs', e);
//         toast.error('Failed!', 'PDF generation failed.\n Page might be too large.\n', 'error');
//     }
// };
// export const exportAsFile = (data, fileName, exportType) => {
//     exportFromJSON({ data, fileName, exportType });
// };

export const formatDateObjectHandler = (dateObj, format = 'YYYY-MM-DD') => {
    if (!dateObj) {
        return undefined;
    }
    if (!moment.isMoment(dateObj)) {
        return moment(dateObj).format(format);
    }
    return dateObj.format(format);
};

// TO REDUCE STRING LENGTH
export const truncateText = (string = '', length = '30', ending = '...') => {
    if (!(string && length)) {
        return;
    }
    return length > string.length ? string : string.substring(0, length - ending.length) + ending;
};

export const capitalize = val => {
    return val.charAt(0).toUpperCase() + val.slice(1);
};

export const findAllTotal = list => {
    if (!Array && list === undefined) {
        return 0;
    }
    if (list !== undefined && list.length > 0) {
        return list.reduce((a, b) => a + parseFloat(b), 0);
    }
    return '0.00';
};

export const isEmpty = obj => {
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
};

export const scrollToTop = () => {
    window.scrollTo(0, 0);
};

export const customizeUploadPath = (path, file) => {
    const ext = file.type.split('/')[1];
    return path + '.' + ext;
};

export const getTitle = id => {
    let title = '';
    switch (id) {
        case 1:
            title = 'Dr.';
            break;
        case 2:
            title = 'Pharm.';
            break;
        case 3:
            title = '';
            break;
        default:
            title = '';
    }
    return title;
};
