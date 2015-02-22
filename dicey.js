(function (o) {

    function RollPattern (f) {
        this.roll = f;
    };

    o.NORMAL_ROLL = new RollPattern(function (min, max) {
        return Math.floor(min + ((max-min+1)*Math.random()));
    });

    o.BEST_OF_TWO = new RollPattern(function (min, max) {
        return Math.max(o.NORMAL_ROLL.roll(min, max), o.NORMAL_ROLL.roll(min, max));
    });

    o.BEST_OF_THREE = new RollPattern(function (min, max) {
        return Math.max(o.BEST_OF_TWO.roll(min, max), o.NORMAL_ROLL.roll(min, max));
    });

    o.WORST_OF_TWO = new RollPattern(function (min, max) {
        return Math.min(o.NORMAL_ROLL.roll(min, max), o.NORMAL_ROLL.roll(min, max));
    });

    o.WORST_OF_THREE = new RollPattern(function (min, max) {
        return Math.min(o.WORST_OF_TWO.roll(min, max), o.NORMAL_ROLL.roll(min, max));
    });

    o.roll = function () {

        var args = Array.prototype.slice.call(arguments),
            last_arg = args[args.length - 1],
            min = 0, 
            max = 1, 
            rand_method = o.defaultMethod || o.NORMAL_ROLL, 
            dc;

        if (last_arg) {

            if(last_arg.constructor === RollPattern) {
                rand_method = args.pop();
            } else if (last_arg.constructor === String && o[last_arg] && o[last_arg].constructor === RollPattern){
                rand_method = o[args.pop()];
            }

        }

        if (args.length > 0) {

            if (args.length === 1) {

                if (args[0].constructor === String) {

                    dc = args[0].match(/(\d*)d(\d*)/);

                    if (!dc) {
                        throw new Error ('Unable to parse the value "' + args[0] + '". Should follow the "9d9" pattern.')
                    }

                    min = dc[1] | 0;
                    max = min*dc[2];

                } else {
                    max = args[0] | 0;
                }

            } else {

                min = args[0] | 0;
                max = args[1] | 0;

            }

        }

        return rand_method.roll(min, max);

    }

})(typeof exports === 'undefined'? this['Dicey']={}: exports);