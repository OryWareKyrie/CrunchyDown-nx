// available langs

const languages = [
    { cr_locale: 'en-US',  locale: 'en',     code: 'eng', name: 'English'                                        },
    { cr_locale: 'es-LA',  locale: 'es-419', code: 'spa', name: 'Spanish',    language: 'Latin American Spanish' },
    { cr_locale: 'es-419', locale: 'es-419', code: 'spa', name: 'Spanish',    language: 'Latin American Spanish' },
    { cr_locale: 'es-ES',  locale: 'es',     code: 'spa', name: 'Spanish'                                        },
    { cr_locale: 'pt-BR',  locale: 'pt-BR',  code: 'por', name: 'Portuguese', language: 'Brazilian Portuguese'   },
    { cr_locale: 'fr-FR',  locale: 'fr',     code: 'fra', name: 'French'                                         },
    { cr_locale: 'de-DE',  locale: 'de',     code: 'deu', name: 'German'                                         },
    { cr_locale: 'ar-ME',  locale: 'ar',     code: 'ara', name: 'Arabic'                                         },
    { cr_locale: 'ar-SA',  locale: 'ar',     code: 'ara', name: 'Arabic'                                         },
    { cr_locale: 'it-IT',  locale: 'it',     code: 'ita', name: 'Italian'                                        },
    { cr_locale: 'ru-RU',  locale: 'ru',     code: 'rus', name: 'Russian'                                        },
    { cr_locale: 'tr-TR',  locale: 'tr',     code: 'tur', name: 'Turkish'                                        },
    { cr_locale: 'ja-JP',  locale: 'ja',     code: 'jpn', name: 'Japanese'                                       },
];

// add en language names
(() =>{
    for(let languageIndex in languages){
        if(!languages[languageIndex].language){
            languages[languageIndex].language = languages[languageIndex].name;
        }
    }
})();

// construct dub language codes
const dubLanguageCodes = (() => {
    const dubLanguageCodesArray = [];
    for(const language of languages){
        dubLanguageCodesArray.push(language.code);
    }
    return [...new Set(dubLanguageCodesArray)];
})();

// construct subtitle languages filter
const subtitleLanguagesFilter = (() => {
    const subtitleLanguagesExtraParameters = ['all', 'none'];
    return [...subtitleLanguagesExtraParameters, ...new Set(languages.map(l => { return l.locale; }).slice(0, -1))];
})();

const searchLocales = (() => {
    return ['', ...new Set(languages.map(l => { return l.cr_locale; }).slice(0, -1))];
})();

// convert
const fixLanguageTag = (tag) => {
    tag = typeof tag == 'string' ? tag : 'und'; 
    const tagLangLC = tag.match(/^(\w{2})-?(\w{2})$/);
    if(tagLangLC){
        const tagLang = `${tagLangLC[1]}-${tagLangLC[2].toUpperCase()}`;
        if(findLang(tagLang).cr_locale != 'und'){
            return findLang(tagLang).cr_locale;
        }
        else{
            return tagLang;
        }
    }
    else{
        return tag;
    }
};

// find lang by cr_locale
const findLang = (cr_locale) => {
    const lang = languages.find(l => { return l.cr_locale == cr_locale; });
    return lang ? lang : { cr_locale: 'und', locale: 'un', code: 'und', name: '', language: '' };
};

const fixAndFindCrLC = (cr_locale) => {
    return findLang(fixLanguageTag(cr_locale));
};

// rss subs lang parser
const parseRssSubtitlesString = (subs) => {
    subs = subs.replace(/\s/g, '').split(',').map((s) => {
        return fixAndFindCrLC(s).locale;
    });
    subs = sortTags(subs);
    return subs.join(', ');
};


// parse subtitles Array
const parseSubtitlesArray = (tags) => {
    tags = sortSubtitles(tags.map((t) => {
        return { locale: fixAndFindCrLC(t).locale };
    }));
    tags = tags.map((t) => { return t.locale; });
    return tags.join(', ');
};

// sort subtitles
const sortSubtitles = (data, sortkey) => {
    const idx = {};
    sortkey = sortkey || 'locale';
    const tags = [...new Set(Object.values(languages).map(e => e.locale))];
    for(const l of tags){
        idx[l] = Object.keys(idx).length + 1;
    }
    data.sort((a, b) => {
        const ia = idx[a[sortkey]] ? idx[a[sortkey]] : 50;
        const ib = idx[b[sortkey]] ? idx[b[sortkey]] : 50;
        return ia - ib;
    });
    return data;
};

const sortTags = (data) => {
    data = data.map(e => { return { locale: e }; });
    data = sortSubtitles(data);
    return data.map(e => e.locale);
};

const subsFile = (fnOutput, subsIndex, langItem) => {
    subsIndex = (parseInt(subsIndex) + 1).toString().padStart(2, '0');
    return `${fnOutput}.${subsIndex} ${langItem.code} ${langItem.language}.ass`;
};

// construct dub langs const
const dubLanguages = (() => {
    const dubDb = {};
    for(const lang of languages){
        if(!Object.keys(dubDb).includes(lang.name)){
            dubDb[lang.name] = lang.code;
        }
    }
    return dubDb;
})();

// dub regex
const dubRegExpStr =
    `\\((${Object.keys(dubLanguages).join('|')})(?: (Dub|VO))?\\)$`;
const dubRegExp = new RegExp(dubRegExpStr);

// code to lang name
const langCode2name = (code) => {
    const codeIdx = dubLanguageCodes.indexOf(code);
    return Object.keys(dubLanguages)[codeIdx];
};

// locale to lang name
const locale2language = (locale) => {
    locale = languages.filter(l => {
        return l.locale == locale;
    });
    return locale[0];
};

// output
module.exports = {
    languages,
    dubLanguageCodes,
    dubLanguages,
    langCode2name,
    locale2language,
    dubRegExp,
    subtitleLanguagesFilter,
    searchLocales,
    fixLanguageTag,
    findLang,
    fixAndFindCrLC,
    parseRssSubtitlesString,
    parseSubtitlesArray,
    sortSubtitles,
    sortTags,
    subsFile,
};
