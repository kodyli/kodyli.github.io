(function (jsaw) {
    //sliding window
    jsaw.problem(
        [
            {
                name: 'Find Average of Subarray of Size K (easy)',
                statement: "Given an array, find the average of all contiguous subarrays of size 'K' in it.",
                examples: "Input: k = 5, numbers =  [1, 3, 2, 6, -1, 4, 1, 8, 2]; Output: [2.2, 2.8, 2.4, 3.6, 2.8].",
                test: function (findAverageOfSubarray) {
                    //jasmine style test cases.
                    describe(this.name, function () {
                        it("Input: k = 5, numbers = [1, 3, 2, 6, -1, 4, 1, 8, 2]; Output: [2.2, 2.8, 2.4, 3.6, 2.8].", function () {
                            expect(findAverageOfSubarray(5, [1, 3, 2, 6, -1, 4, 1, 8, 2])).toEqual([2.2, 2.8, 2.4, 3.6, 2.8]);
                        });
                    });
                },
                code: function findAverageOfSubarray(k, numbers) {
                    return [];
                },
                solution: function findAverageOfSubarray(k, numbers) {
                    return [];
                }
            }, {
                name: 'Maximun Sum Subarray of Size K (easy)',
                statement: 'Given an array of positive numbers and a positive number "K", find the maximum sum of any contiguous subarray of size "k".',
                examples: "Input: k = 3, numbers = [2, 1, 5, 1, 3, 2]; Output: 9.",
                test: function (maxSubarrayOfSizeK) {
                    //jasmine style test cases.
                    describe(this.name, function () {
                        it("Input: k = 3, numbers = [2, 1, 5, 1, 3, 2]; Output: 9.", function () {
                            expect(maxSubarrayOfSizeK(3, [2, 1, 5, 1, 3, 2])).toEqual(9);
                        });
                        it("Input: k = 2, numbers = [2, 3, 4, 1, 5]; Output: 7.", function () {
                            expect(maxSubarrayOfSizeK(2, [2, 3, 4, 1, 5])).toEqual(7);
                        });
                    });
                },
                code: function maxSubarrayOfSizeK(k, numbers) {
                    return 0;
                },
                solution: function maxSubarrayOfSizeK(k, numbers) {
                    let maxSum = 0,
                        sum = 0,
                        start = 0;
                    for (let i = 0, l = numbers.length; i < l; i++) {
                        sum += numbers[i];
                        // the size is fixed, so using 'if' statement.
                        if (i >= k - 1) {
                            maxSum = Math.max(maxSum, sum);
                            sum -= numbers[start];
                            start += 1;
                        }
                    }
                    return maxSum;
                }
            }, {
                name: "Smallest Subarray with a given sum (easy)",
                statement: "Given an array of positive numbers and a positive number 'S', find the length of the smallest contiguous subarray whose sum is greater than or equal to 'S'. Return 0, if no such subarray exists.",
                examples: "Input: s = 7, numbers = [2, 1, 5, 2, 3, 2]; Output: 2; Explanation: The smallest subarray with a sum great than or equal to '7' is [5,2].",
                test: function (smallestSubarrayWithGivenSum) {
                    //jasmine style test cases.
                    describe(this.name, function () {
                        it("Input: s = 7, numbers = [2, 1, 5, 2, 3, 2]; Output: 2.", function () {
                            expect(smallestSubarrayWithGivenSum(7, [2, 1, 5, 2, 3, 2])).toEqual(2);
                        });
                    });
                },
                code: function smallestSubarrayWithGivenSum(s, numbers) {
                    return [];
                },
                solution: function smallestSubarrayWithGivenSum(s, numbers) {
                    return [];
                }
            }, {
                name: "Longest Substring with K Distinct Characters (medium)",
                statement: "Given a string, find the length of the longest substring in it with no more than K distinct characters.",
                examples: "Input: str = 'araaci', k=2; Output: 4; Explanation: The longest substring with no more than '2' distinct characters is 'araa'.",
                test: function (longestSubstringWithKDistinct) {
                    //jasmine style test cases.
                    describe(this.name, function () {
                        it("Input: str = 'araaci', k=2; Output: 4.", function () {
                            expect(longestSubstringWithKDistinct(2, 'araaci')).toEqual(4);
                        });
                    });
                },
                code: function longestSubstringWithKDistinct(k, str) {
                    return 0;
                },
                solution: function longestSubstringWithKDistinct(k, str) {
                    return 0;
                }
            }, {
                name: "Fruits into Baskets (medium)",
                statement: "Given an array of characters where each character represents a fruit tree, you are given two baskets and your goal is to put a maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.",
                examples: "Input: Fruit = ['A', 'B', 'C', 'A', 'C']; Output: 3; Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']",
                test: function (fruitsIntoBaskets) {
                    //jasmine style test cases.
                    describe(this.name, function () {
                        it("Input: Fruit = ['A', 'B', 'C', 'A', 'C']; Output: 3.", function () {
                            expect(fruitsIntoBaskets(['A', 'B', 'C', 'A', 'C'])).toEqual(3);
                        });
                    });
                },
                code: function fruitsIntoBaskets(fruits) {
                    return 0;
                },
                solution: function fruitsIntoBaskets(fruits) {
                    return 0;
                }
            }, {
                name: "No-repeat Substring (hard)",
                statement: "Given a string, find the length of the longest substring which has no repeating characters.",
                examples: "Input str = 'aabccbb'; Output: 3; Explanation: The longest substring without any repeating characters is 'abc'.",
                test: function (nonRepeatSubstring) {
                    //jasmine style test cases.
                    describe(this.name, function () {
                        it("Input str = 'aabccbb'; Output: 3.", function () {
                            expect(nonRepeatSubstring('aabccbb')).toEqual(3);
                        });
                        it("Input str = 'abcba'; Output: 3.", function () {
                            expect(nonRepeatSubstring('abcba')).toEqual(3);
                        });
                    });
                },
                code: function nonRepeatSubstring(str) {
                    return 0;
                },
                solution: function nonRepeatSubstring(str) {
                    let s = 0,
                        maxL = 0,
                        indexCache = {};
                    for (let e = 0, l = str.length; e < l; e++) {
                        let endChar = str.charAt(e);
                        if (endChar in indexCache) {
                            s = Math.max(indexCache[endChar] + 1, s);
                        } else {
                            indexCache[endChar] = e;
                        }
                        maxL = Math.max(e - s + 1, maxL);
                    }
                    return maxL;
                }
            }, {
                name: 'Longest Substring with Same Letters after Replacement (hard)',
                statement: 'Given a string with lowercase letter only, if you are allowed to replace no more than "k" letters with any letter, find the length of the longest substring having the same letters after replacement.',
                examples: "Input: k = 2, str = 'aabccbb'; Output: 5; Explanation: Replace the two 'c' with 'b' to have a longest repeating substring 'bbbbb'.",
                test: function (lengthOfLongestSubstring) {
                    //jasmine style test cases.
                    describe(this.name, function () {
                        it("Input: k = 2, str = 'aabccbb'; Output: 5.", function () {
                            expect(lengthOfLongestSubstring(2, 'aabccbb')).toEqual(5);
                        });
                        it("Input: k = 1, str = 'abbcb'; Output: 4.", function () {
                            expect(lengthOfLongestSubstring(1, 'abbcb')).toEqual(4);
                        });
                        it("Input: k = 1, str = 'abcba'; Output: 3.", function () {
                            expect(lengthOfLongestSubstring(1, 'abcba')).toEqual(3);
                        });
                    });
                },
                code: function lengthOfLongestSubstring(k, str) {
                    return 0;
                },
                solution: function lengthOfLongestSubstring(k, str) {
                    const lengthCache = {};
                    let s = 0,
                        maxLength = 0,
                        maxRepeatLettersLength = 0;
                    for (let e = 0, l = str.length; e < l; e++) {
                        let endChar = str.charAt(e);
                        if (!(endChar in lengthCache)) {
                            lengthCache[endChar] = 0;
                        }
                        lengthCache[endChar] += 1;
                        maxRepeatLettersLength = Math.max(maxRepeatLettersLength, lengthCache[endChar]);
                        if (e - s + 1 - maxRepeatLettersLength > k) {
                            let startChar = str.charAt(s);
                            lengthCache[startChar] -= 1;
                            s += 1;
                        }
                        maxLength = Math.max(maxLength, e - s + 1);
                    }
                    return maxLength;
                }
            }, {
                name: "Longest Subarray with Ones after Replacement (hard)",
                statement: "Given an array containing 0s and 1s, if you are allowed to replace no more than 'k' 0s with 1s, find the length of the longest contiguous subarray having all 1s.",
                examples: "Input: k = 2, numbers = [0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1]; Output: 6; Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.",
                test: function (lengthOfLongestSubstring) {
                    describe(this.name, function () {
                        it("Input: k = 2, numbers = [0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1]; Output: 6.", function () {
                            expect(lengthOfLongestSubstring(2, [0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1])).toEqual(6);
                        });
                    });
                },
                code: function lengthOfLongestSubstring(k, numbers) {},
                solution: function lengthOfLongestSubstring(k, numbers) {}
            }
        ]
    );
    // Dynamic Programming
    jsaw.problem({
        name: '0/1 Knapsack',
        statement: "Given two integer arrays to represent weights and profits of 'N' items, we need to find a subset of these items which will give us maximum profit such that their cumulative weight is not more than a given number 'C'. Each item can only be selected once, which means either we put an item in the knapsack or we skip it.",
        examples: "Input: profits = [4, 5, 3, 7], weights =  [2, 3, 1, 4], capacity = 5; Output: 10; Explanation: profits[2] + profits[3] = 10, weights[2] + weights[3] = 5.",
        test: function (solveKnapsack) {
            describe(this.name, function () {
                it("Input: profits = [4, 5, 3, 7], weights = [2, 3, 1, 4]; Output: 10. ", function () {
                    expect(solveKnapsack([4, 5, 3, 7], [2, 3, 1, 4], 5)).toEqual(10);
                });
            });
        },
        code: function solveKnapsack(profits, weights, capacity) {
            return 0;
        },
        solution: function solveKnapsack(profits, weights, capacity) {
            return 0;
        }
    });
    jsaw.problem({
        name: 'Equal Subset Sum Partition'
        statement: 'Given a set of positive numbers, find if we can partition it into two subsets such that the sum of elements in both the subsets is equal.'
        examples: 'Input: [1, 1, 3, 4, 7], Output: true, Explanation: The given set can be partitioned into two subsets with equal sum: [1, 3, 4] & [1, 7]; Input: [2, 3, 4, 6], Output: false, Explanation: The given set cannot be partitioned into two subsets with equal sum.',
        test: function (canPartition) {
            describe(this.name, function () {
                it("Input: [1, 1, 3, 4, 7], Output: true.", function () {
                    let result = canPartition([1, 1, 3, 4, 7]);
                    expect(result).toEqual(true);
                });
                it("Input: [1, 2, 3, 4], Output: true.", function () {
                    let result = canPartition([1, 2, 3, 4]);
                    expect(result).toEqual(true);
                });
                it("Input: [2, 3, 4, 6], Output: false.", function () {
                    let result = canPartition([2, 3, 4, 6]);
                    expect(result).toEqual(false);
                });
            });
        },
        code: function canPartition() {
            return false;
        },
        solution: function canPartition() {}
    });
})(jsaw);
