keycodes.js
##########################

keycodes.js lets you to stop struggling to search for what character code matches this or that key on your keyboard

2 methods are available:

  * getCode(key): returns the code corresponding to the key given as a string in parameters
  * getCodes(keys): returns an array of codes corresponding to the array of string representations of keys given in parameters

Using keycodes is easy, include keycodes.js to your page, and do:

  * Keycode.getCode('A'); // returns 65
  * Keycode.getCode('tab'); // returns 9
  * Keycode.getCodes(['L','O','L']); // returns [76, 79, 76]

Aside from the alphabet, numbers and punctuation the following special keys are supported:
  * 'backspace'
  * 'tab'
  * 'enter'
  * 'shift'
  * 'ctrl'
  * 'alt'
  * 'pause'
  * 'caps_lock'
  * 'escape'
  * 'page_up'
  * 'page_down'
  * 'end'
  * 'home'
  * 'left_arrow'
  * 'up_arrow'
  * 'right_arrow'
  * 'down_arrow'
  * 'insert'
  * 'delete'
  * 'num_lock'
  * 'scroll_lock'
  * Add 'numpad\_' in front of the numeric pad key to match it (e.g. 'numpad\_9', 'numpad\_+')

Don't hesitate to fork this project if you want to modify or add features to this object.
