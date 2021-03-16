"use strict";
// This list comes from
// - https://countwordsfree.com/stopwords/french
// - https://github.com/apache/lucene-solr/blob/master/lucene/analysis/common/src/resources/org/apache/lucene/analysis/snowball/french_stop.txt
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stopwords = void 0;
const stop_words_json_1 = __importDefault(require("./stop_words.json"));
exports.stopwords = stop_words_json_1.default;
// export default stopwords;
