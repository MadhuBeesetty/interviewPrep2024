// hashmap in javascript

// let map = new Map();
// map.set('key1', 'value1');
// map.set('key2', 'value2');

// console.log(map.get('key1')); // 'value1'

// Map(2) {"key1" => "value1", "key2" => "value2"}

// Design a HashMap without using any built-in hash table libraries.
// Implement the MyHashMap class:

// MyHashMap() initializes the object with an empty map.
// void put(int key, int value) inserts a (key, value) pair into the HashMap. If the key already exists in the map, update the corresponding value.
// int get(int key) returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
// void remove(key) removes the key and its corresponding value if the map contains the mapping for the key.


class MyHashMap {
    constructor(size) {
        this.mp = new Array(size).fill(null).map(() => []);
    }

    hash(key) {
        return key % this.size;
    }

    put(key, value) {
        if(!this.mp[this.hash(key)]){
            this.mp[this.hash(key)] = [key, value];
        }else{
            this.mp[this.hash(key)][1] = value;
        }
        console.log(this.mp);
    }

    get(key) {
        console.log(key, this.mp, this.hash(key), this.mp[this.hash(key)]);
        if(!this.mp[this.hash(key)] || this.mp[this.hash(key)].length === 0){
            console.log("i am here");
            return -1;
        }else{
            console.log(this.mp[this.hash(key)][1]);
            return this.mp[this.hash(key)][1];
        }
    };

    remove(key){
        this.mp[this.hash(key)] = null;
        console.log(this.mp);
        return this.mp;
    }
}

// Usage
const hashMap = new MyHashMap(5);
hashMap.put(1, 1);
hashMap.put(2, 2);
console.log(hashMap.get(1)); // Output: 1
console.log(hashMap.get(3)); // Output: -1
hashMap.put(2, 1);
console.log(hashMap.get(2)); // Output: 1
hashMap.remove(2);
console.log(hashMap.get(2)); // Output: -1