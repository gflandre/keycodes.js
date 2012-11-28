/*
 * Author : Guillaume Flandre
 * Website : http://www.guillaumeflandre.com
 * 
 * Version : 1.0
 *
 * keycodes.js lets you to stop struggling to search for what character code matches this or that key on your keyboard 
 */

var Keycodes = (function(){

  var keyMap = {
    'backspace': 8,
    'tab': 9,
    'enter': 13,
    'shift': 16,
    'ctrl': 17,
    'alt': 18,
    'pause': 19,
    'caps_lock': 20,
    'escape': 27,
    'page_up': 33,
    'page_down': 34,
    'end': 35,
    'home': 36,
    'left_arrow': 37,
    'up_arrow': 38,
    'right_arrow': 39,
    'down_arrow': 40,
    'insert': 45,
    'delete': 46,
    '0': 48, '1': 49, '2': 50, '3': 51, '4': 52, '5': 53, '6': 54, '7': 55, '8': 56, '9': 57,
    'a': 65, 'b': 66, 'c': 67, 'd': 68, 'e': 69, 'f': 70, 'g': 71, 'h': 72, 'i': 73, 'j': 74, 'k': 75, 'l': 76, 'm': 77, 'n': 78, 'o': 79, 'p': 80, 'q': 81, 'r': 82, 's': 83, 't': 84, 'u': 85, 'v': 86, 'w': 87, 'x': 88, 'y': 89, 'z': 90,
    'left_cmd': 91,
    'right_cmd': 92,
    'numpad_0': 96, 'numpad_1': 97, 'numpad_2': 98, 'numpad_3': 99, 'numpad_4': 100, 'numpad_5': 101, 'numpad_6': 102, 'numpad_7': 103, 'numpad_8': 104, 'numpad_9': 105,
    'numpad_*': 106, 'numpad_+': 107, 'numpad_-': 109, 'numpad_.': 110, 'numpad_/': 111,
    'f1': 112, 'f2': 113, 'f3': 114, 'f4': 115, 'f5': 116, 'f6': 117, 'f7': 118, 'f8': 119, 'f9': 120, 'f10': 121, 'f11': 122, 'f12': 123,
    'num_lock': 144, 'scroll_lock': 145,
    ';': 186, ':': 186, '=': 187, ',': 188, '<': 188, '-': 189, '.': 190, '>': 190, '/': 191, '?': 191, '`': 192, '?': 192, '@': 192, '[': 219, '{': 219, '\\': 220, '|': 220, ']': 221, '}':221, "'": 222, '"': 222
  };

  function getCode(key)
  {
    formattedKey = (key+'').toLowerCase();
    return keyMap[formattedKey];
  }

  function getCodes(keys)
  {
    var codes = [];
    if( Object.prototype.toString.call( keys ) === '[object Array]' ) {
      for(var i=0; i<keys.length; i++){
        codes.push(this.getCode(keys[i]));
      }
    }
    return codes;
  }
  
  return {
    getCode:    getCode,
    getCodes:   getCodes
  }
    
})();
