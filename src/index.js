if(!Array.prototype.intersperse) {
    Array.prototype.intersperse = function(sepparator) {
        if (this.length === 0) {
            return [];
        }

        return this.slice(1).reduce(function(xs, x, i) {
            return xs.concat([sepparator, x]);
        }, [this[0]]);
    };
}