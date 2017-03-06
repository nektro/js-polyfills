# js-polyfills
Some ECMAScript function you've always wanted but never had access to...

----
<dl>
    <dt>String.prototype.replaceAll</dt>
    <dd>`(with, what)` :: Replace all occurences of {with} with {what}</dd>
    
    <dt>Array.prototype.random</dt>
    <dd>`()` :: Return the value of this Array at a random index</dd>
    
    <dt>HTMLCollection.prototype.indexOf</dt>
    <dd>`(i)` :: Alias of Array.prototype.indexOf for HTMLCollection</dd>
    
    <dt>HTMLCollection.prototype.forEach</dt>
    <dd>`(fn(v,i))` :: Alias of Array.prototype.forEach for HTMLCollection</dd>
    
    <dt>Array.prototype.powerSet</dt>
    <dd>`()` :: Return the [power set](https://en.wikipedia.org/wiki/Power_set) of this Array as an Iterable</dd>
    
    <dt>Array.prototype.clean</dt>
    <dd>`(v)` :: Return this Array with all occurences of `{v}` removed</dd>
</dl>
