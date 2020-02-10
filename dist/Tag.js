"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var stringifyAttributes = function (attributes) {
    return Object.keys(attributes)
        .map(function (key) { return " " + key + "=\"" + String(attributes[key]) + "\""; })
        .join('');
};
var Tag = /** @class */ (function () {
    function Tag(tag) {
        this.children = [];
        this.attributes = {};
        this.innerText = '';
        this.tag = tag;
    }
    Tag.prototype.child = function (tag) {
        var child = new Tag(tag);
        this.children.push(child);
        return child;
    };
    Tag.prototype.c = function (tag) {
        return this.child(tag);
    };
    Tag.prototype.attr = function (newAttributes) {
        var previousAttributes = this.attributes;
        this.attributes = __assign(__assign({}, previousAttributes), newAttributes);
        return this;
    };
    Tag.prototype.a = function (newAttributes) {
        return this.attr(newAttributes);
    };
    Tag.prototype.data = function (innerText) {
        this.innerText = innerText;
        return this;
    };
    Tag.prototype.d = function (innerText) {
        return this.data(innerText);
    };
    Tag.prototype.outer = function () {
        return "<" + this.tag + stringifyAttributes(this.attributes) + ">" + this.inner() + "</" + this.tag + ">";
    };
    Tag.prototype.inner = function () {
        return this.children.length > 0
            ? this.children
                .map(function (child) { return child.outer(); })
                .join('')
            : this.innerText;
    };
    return Tag;
}());
exports.default = Tag;
