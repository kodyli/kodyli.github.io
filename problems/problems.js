(function (jsaw) {
	//Sorting
	jsaw.problem({
		name: 'Selection Sort',
		statement: "Given an array, sort it by using selection sort.",
		examples: "Input: numbers = [1, 3, 2, 6, 5, 4, 7, 8, 9, 0]; Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].",
		test: function (selectionSort) {
			//jasmine style test cases.
			describe(this.name, function () {
				it("Input: numbers = [1, 3, 2, 6, 5, 4, 7, 8, 9, 0]; Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].", function () {
					expect(selectionSort([1, 3, 2, 6, 5, 4, 7, 8, 9, 0])).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
				});
			});
		},
		code: function selectionSort(numbers) {
			return numbers;
		},
		solution: function selectionSort(numbers) {
			var l = numbers.length;
			for (var i = 0; i < l; i++) {
				var min = i;
				for (var j = i + 1; j < l; j++) {
					if (numbers[j] < numbers[min]) {
						min = j;
					}
				}
				var temp = numbers[i];
				numbers[i] = numbers[min];
				numbers[min] = temp;
			}
			return numbers;
		}
	});
	jsaw.problem({
		name: 'Insertion Sort',
		statement: "Given an array, sort it by using insertion sort.",
		examples: "Input: numbers = [1, 3, 2, 6, 5, 4, 7, 8, 9, 0]; Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].",
		test: function (insertionSort) {
			//jasmine style test cases.
			describe(this.name, function () {
				it("Input: numbers = [1, 3, 2, 6, 5, 4, 7, 8, 9, 0]; Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].", function () {
					expect(insertionSort([1, 3, 2, 6, 5, 4, 7, 8, 9, 0])).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
				});
			});
		},
		code: function insertionSort(numbers) {
			return numbers;
		},
		solution: function insertionSort(numbers) {
			for (var i = 1, l = numbers.length; i < l; i++) {
				var j,
					min = numbers[i];
				for (j = i; j > 0 && numbers[j - 1] > min; j--) {
					numbers[j] = numbers[j - 1];
				}
				numbers[j] = min;
			}
			return numbers;
		}
	});
	jsaw.problem({
		name: 'Merge Sort',
		statement: "Given an array, sort it by using merge sort.",
		examples: "Input: numbers = [1, 3, 2, 6, 5, 4, 7, 8, 9, 0]; Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].",
		test: function (mergeSort) {
			//jasmine style test cases.
			describe(this.name, function () {
				it("Input: numbers = [1, 3, 2, 6, 5, 4, 7, 8, 9, 0]; Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].", function () {
					expect(mergeSort([1, 3, 2, 6, 5, 4, 7, 8, 9, 0])).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
				});
			});
		},
		code: function mergeSort(numbers) {
			return numbers;
		},
		solution: function mergeSort(numbers) {
			return numbers;
		}
	});
	jsaw.problem({
		name: 'Quick Sort',
		statement: "Given an array, sort it by using quick sort.",
		examples: "Input: numbers = [1, 3, 2, 6, 5, 4, 7, 8, 9, 0]; Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].",
		test: function (quickSort) {
			//jasmine style test cases.
			describe(this.name, function () {
				it("Input: numbers = [1, 3, 2, 6, 5, 4, 7, 8, 9, 0]; Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].", function () {
					expect(quickSort([1, 3, 2, 6, 5, 4, 7, 8, 9, 0])).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
				});
			});
		},
		code: function quickSort(numbers) {
			return numbers;
		},
		solution: function quickSort(numbers) {
			return numbers;
		}
	});
	//Sliding Window
	jsaw.problem({
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
	});
	jsaw.problem({
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
	});
	jsaw.problem({
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
	});
	jsaw.problem({
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
	});
	jsaw.problem({
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
	});
	jsaw.problem({
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
	});
	jsaw.problem({
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
	});
	jsaw.problem({
		name: "Longest Subarray with Ones after Replacement (hard)",
		statement: "Given an array containing 0s and 1s, if you are allowed to replace no more than 'k' 0s with 1s, find the length of the longest contiguous subarray having all 1s.",
		examples: "Input: k = 2, numbers = [0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1]; Output: 6; Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.",
		test: function (lengthOfLongestSubstring) {
			describe(this.name, function () {
				it("Input: k = 2, numbers = [0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1]; Output: 6.", function () {
					expect(lengthOfLongestSubstring(2, [0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1])).toEqual(6);
				});
				it("Input: k = 5, numbers = [0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1]; Output: 11.", function () {
					expect(lengthOfLongestSubstring(5, [0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1])).toEqual(11);
				});
				it("Input: k = 3, numbers = [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1]; Output: 7.", function () {
					expect(lengthOfLongestSubstring(3, [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1])).toEqual(7);
				});
			});
		},
		code: function lengthOfLongestSubstring(k, numbers) {
			return 0;
		},
		solution: function lengthOfLongestSubstring(k, numbers) {
			return 0;
		}
	});
	jsaw.problem({
		name: 'Permutation in a String (hard)',
		statement: "Given a string and a pattern, find out if the string contains any permutation of the pattern. Permutation is defined as the re-arranging of the characters of the string. For example, 'abc' has the following six permutations: 'abc', 'acb', 'bac', 'bca', 'cab', 'cba'.",
		examples: "Input: str = 'oidbcaf', pattern = 'abc'; Output: true; Explanation: The string contains 'bca' which is a permutation of the given pattern.",
		test: function (findPermutation) {
			describe(this.name, function () {
				it("Input: str = 'oidbcaf', pattern = 'abc'; Output: true.", function () {
					expect(findPermutation('oidbcaf', 'abc')).toBe(true);
				});
				it("Input: str = 'odicf', pattern = 'dc'; Output: false.", function () {
					expect(findPermutation('odicf', 'dc')).toBe(false);
				});
			});
		},
		code: function findPermutation(str, pattern) {
			return false;
		},
		solution: function findPermutation(str, pattern) {
			return false;
		}
	});
	jsaw.problem({
		name: 'String Anagrams (hard)',
		statement: "Given a string and pattern, find all anagrams of the pattern in the given string. Anagram is actually a Permutation of a string. For example, 'abc' has the following six anagrams: 'abc', 'acb', 'bac', 'bca', 'cab', 'cba'. Write a function to return a list of starting indices of the anagrams of the pattern in the given string.",
		examples: "Input: str = 'ppqq', pattern = 'pq'; Output: [1, 2]; Explanation: The two anagrams of the pattern in the given string are 'pq' and 'qp'.",
		test: function (findStringAnagrams) {
			describe(this.name, function () {
				it("Input: str = 'ppqq', pattern = 'pq'; Output: [1, 2].", function () {
					expect(findStringAnagrams('ppqq', 'pq')).toEqual([1, 2]);
				});
				it("Input: str = 'abbcabc', pattern = 'abc'; Output: [2, 3, 4].", function () {
					expect(findStringAnagrams('abbcabc', 'abc')).toEqual([2, 3, 4]);
				});
			});
		},
		code: function findStringAnagrams(str, pattern) {
			return [];
		},
		solution: function findStringAnagrams(str, pattern) {
			return [];
		}
	});
	jsaw.problem({
		name: 'Smallest Window containing Substring (hard)',
		statement: "Given a string and a pattern, find the smallest substring in the given string which has all the characters of the given pattern.",
		examples: "Input: str = 'aabdec', pattern = 'abc'; Output: 'abdec'; Explanation: The smallest substring having all characters of the pattern is 'abdec'.",
		test: function (findSubstring) {
			describe(this.name, function () {
				it("Input: str = 'aabdec', pattern = 'abc'; Output: 'abdec'.", function () {
					expect(findSubstring('aabdec', 'abc')).toEqual('abdec');
				});
				it("Input: str = 'adcad', pattern = 'abc'; Output: ''.", function () {
					expect(findSubstring('adcad', 'abc')).toEqual('');
				});
				it("Input: str = 'abdabca', pattern = 'abc'; Output: 'abc'.", function () {
					expect(findSubstring('abdabca', 'abc')).toEqual('abc');
				});
			});
		},
		code: function findSubstring(str, pattern) {
			return '';
		},
		solution: function findSubstring(str, pattern) {
			return '';
		}
	});
	jsaw.problem({
		name: 'Words Concatenation (hard)',
		statement: "Given a string and a list of words, find all the starting indices of substrings in the given string that are a concatenation of all the given words exactly once without any overlapping of words. It is given that all words are of the same length.",
		examples: "Input: str = 'catfoxcat', words = ['cat', 'fox']; Output: [0, 3]; Explanation: The two substring containing both the words are 'catfox' & 'foxcat'.",
		test: function (findWordConcatenation) {
			describe(this.name, function () {
				it("Input: str = 'catfoxcat', words = ['cat', 'fox']; Output: [0, 3].", function () {
					expect(findWordConcatenation('catfoxcat', ['cat', 'fox'])).toEqual([0, 3]);
				});
				it("Input: str = 'catcatfoxfox', words = ['cat', 'fox']; Output: [3].", function () {
					expect(findWordConcatenation('catcatfoxfox', ['cat', 'fox'])).toEqual([3]);
				});
			});
		},
		code: function findWordConcatenation(str, pattern) {
			return [];
		},
		solution: function findWordConcatenation(str, pattern) {
			return [];
		}
	});
	//Tow Pointers
	jsaw.problem({
		name: 'Pair with Target Sum (easy)',
		statement: "Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.",
		examples: "Input: target = 6, numbers = [1, 2, 3, 4, 6]; Output: [1, 3]; Explanation: The numbers at index 1 and 3 add up to6: 2+4=6.",
		test: function (pairWithTargetSum) {
			//jasmine style test cases.
			describe(this.name, function () {
				it("Input: target = 6, numbers = [1, 2, 3, 4, 6]; Output: [1, 3].", function () {
					expect(pairWithTargetSum(6, [1, 2, 3, 4, 6])).toEqual([1, 3]);
				});
				it("Input: target = 11, numbers = [1, 2, 3, 4, 6]; Output: [].", function () {
					expect(pairWithTargetSum(11, [1, 2, 3, 4, 6])).toEqual([]);
				});
			});
		},
		code: function pairWithTargetSum(target, numbers) {
			return [];
		},
		solution: function pairWithTargetSum(target, numbers) {
			return [];
		}
	});
	jsaw.problem({
		name: 'Remove Duplicates (easy)',
		statement: "Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the new length of the array.",
		examples: "Input: numbers = [2, 3, 3, 3, 6, 9, 9]; Output: 4; Explanation: The first four element after removing the duplicates will be [2, 3, 6, 9].",
		test: function (removeDuplicate) {
			//jasmine style test cases.
			describe(this.name, function () {
				it("Input: numbers = [2, 3, 3, 3, 6, 9, 9]; Output: 4.", function () {
					expect(removeDuplicate([2, 3, 3, 3, 6, 9, 9])).toEqual(4);
				});
			});
		},
		code: function removeDuplicate(numbers) {
			return 0;
		},
		solution: function removeDuplicate(numbers) {
			return 0;
		}
	});
	jsaw.problem({
		name: 'Squaring a Sorted Array (easy)',
		statement: "Given a sorted array, create a new array containing squares of all the number of the input array in the sorted order.",
		examples: "Input: numbers = [-2, -1, 0, 2, 3]; Output: [0, 1, 4, 4, 9];",
		test: function (makeSquares) {
			//jasmine style test cases.
			describe(this.name, function () {
				it("Input: numbers = [-2, -1, 0, 2, 3]; Output: [0, 1, 4, 4, 9];", function () {
					expect(makeSquares([-2, -1, 0, 2, 3])).toEqual([0, 1, 4, 4, 9]);
				});
				it("Input: numbers = [-3, -1, 0, 1, 2]; Output: [0, 1, 1, 4, 9];", function () {
					expect(makeSquares([-3, -1, 0, 1, 2])).toEqual([0, 1, 1, 4, 9]);
				});
			});
		},
		code: function makeSquares(numbers) {
			return [];
		},
		solution: function makeSquares(numbers) {
			return [];
		}
	});
	jsaw.problem({
		name: 'Triplet Sum to Zero (medium)',
		statement: "Given an array of unsorted numbers, find all unique triplets in it that add up to zero.",
		examples: "Input: numbers = [-3, 0, 1, 2, -1, 1, -2]; Output:  [[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]];",
		test: function (searchTriplets) {
			//jasmine style test cases.
			describe(this.name, function () {
				it("Input: numbers = [-3, 0, 1, 2, -1, 1, -2]; Output:  [[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]].", function () {
					expect(searchTriplets([-3, 0, 1, 2, -1, 1, -2])).toEqual([[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]]);
				});
			});
		},
		code: function searchTriplets(numbers) {
			return [];
		},
		solution: function searchTriplets(numbers) {
			const result = [];
			numbers.sort((a, b) => a - b);
			for (let i = 0, l = numbers.length; i < l && numbers[i] < 0; i++) {
				if (i === 0 || numbers[i] !== numbers[i - 1]) {
					pairWithTargetSum(-numbers[i], numbers, i, result);
				}
			}

			function pairWithTargetSum(target, numbers, currentIndex, result) {
				let e = numbers.length - 1;
				let s = currentIndex + 1;
				let sum = 0;
				while (e > s) {
					sum = numbers[s] + numbers[e];
					if (sum > target) {
						e -= 1;
					} else if (sum < target) {
						s += 1;
					} else {
						result.push([numbers[currentIndex], numbers[s], numbers[e]]);
						do {
							s += 1;
						} while (numbers[s] === numbers[s - 1]);
						do {
							e -= 1;
						} while (numbers[e] === numbers[e + 1]);
					}
				}
			}
			return result;
		}
	});
	jsaw.problem({
		name: 'Triplet Sum Close to Target (medium)',
		statement: "Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. If there is more than one such triplet, return the sum fo the triplet with the smallest sum.",
		examples: "Input: target = 2, numbers = [-2, 0, 1, 2]; Output: 1; Explanation: The triplet [-2, 1, 2] has the closest sum to the target.",
		test: function (tripletSumCloseToTarget) {
			//jasmine style test cases.
			describe(this.name, function () {
				it("Input: target = 2, numbers = [-2, 0, 1, 2]; Output: 1.", function () {
					expect(tripletSumCloseToTarget(2, [-2, 0, 1, 2])).toEqual(1);
				});
				it("Input: target = 100, numbers = [1, 0, 1, 1]; Output: 3.", function () {
					expect(tripletSumCloseToTarget(100, [1, 0, 1, 1])).toEqual(3);
				});
				it("Input: target = 1, numbers = [-3, -1, 1, 2]; Output: 0.", function () {
					expect(tripletSumCloseToTarget(100, [1, 0, 1, 1])).toEqual(0);
				});
			});
		},
		code: function tripletSumCloseToTarget(target, numbers) {
			return 0;
		},
		solution: function tripletSumCloseToTarget(target, numbers) {
			return 0;
		}
	});
	jsaw.problem({
		name: 'Triplet Sum Close to Target (medium)',
		statement: "Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. If there is more than one such triplet, return the sum fo the triplet with the smallest sum.",
		examples: "Input: target = 2, numbers = [-2, 0, 1, 2]; Output: 1; Explanation: The triplet [-2, 1, 2] has the closest sum to the target.",
		test: function (tripletSumCloseToTarget) {
			//jasmine style test cases.
			describe(this.name, function () {
				it("Input: target = 2, numbers = [-2, 0, 1, 2]; Output: 1.", function () {
					expect(tripletSumCloseToTarget(2, [-2, 0, 1, 2])).toEqual(1);
				});
				it("Input: target = 100, numbers = [1, 0, 1, 1]; Output: 3.", function () {
					expect(tripletSumCloseToTarget(100, [1, 0, 1, 1])).toEqual(3);
				});
				it("Input: target = 1, numbers = [-3, -1, 1, 2]; Output: 0.", function () {
					expect(tripletSumCloseToTarget(100, [1, 0, 1, 1])).toEqual(0);
				});
			});
		},
		code: function tripletSumCloseToTarget(target, numbers) {
			return 0;
		},
		solution: function tripletSumCloseToTarget(target, numbers) {
			return 0;
		}
	});
	//Merge Intervals
	jsaw.problem({
		name: 'Merge Intervals (medium)',
		statement: "Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.",
		examples: "Input: intervals =  [[1, 4], [2, 5], [7, 9]]; Output: [[1, 5], [7, 9]]; Explanation: Since the first two intervals [1, 4] and [2, 5] overlap, we merged them into on [1, 5].",
		test: function (merge) {
			//jasmine style test cases.
			describe(this.name, function () {
				it("Input: intervals = [[1, 4], [2, 5], [7, 9]]; Output: [[1, 5], [7, 9]].", function () {
					expect(merge([[1, 4], [2, 5], [7, 9]])).toEqual([[1, 5], [7, 9]]);
				});
				it("Input: intervals = [[1, 4], [2, 6], [3, 5]]; Output: [[1, 6]].", function () {
					expect(merge([[1, 4], [2, 6], [3, 5]])).toEqual([[1, 6]]);
				});
			});
		},
		code: function merge(intervals) {
			return [];
		},
		solution: function merge(intervals) {
			const result = [];
			intervals.sort((a, b) => a[0] - b[0]);
			for (let i = 0, l = intervals.length; i < l; i++) {
				if (result.length === 0 || result[result.length - 1][1] < intervals[i][0]) {
					result.push(intervals[i]);
				} else {
					result[result.length - 1][1] = Math.max(result[result.length - 1][1], intervals[i][1]);
				}
			}
			return result;
		}
	});
	jsaw.problem({
		name: 'Inset Interval (medium)',
		statement: "Given a list of non-overlapping intervals sorted by their start time, insert a given interval at the correct position and merge all necessary intervals to produce a list that has only mutually exclusive intervals.",
		examples: "Input: [[1, 3], [5, 7], [8, 12]], newInterval = [4, 10]; Output: [[1, 3], [4, 12]]; Explanation: After insertion, since [4, 10] overlaps with [5, 7] & [8, 12], we merged them into [4, 12].",
		test: function (insert) {
			//jasmine style test cases.
			describe(this.name, function () {
				it("Input: [[1, 3], [5, 7], [8, 12]], newInterval = [4, 10]; Output: [[1, 3], [4, 12]].", function () {
					expect(insert([[1, 3], [5, 7], [8, 12]], [4, 10])).toEqual([[1, 3], [4, 12]]);
				});
				it("Input: [[1, 3], [5, 7], [8, 12]], newInterval = [4, 6]; Output: [[1, 3], [4, 7], [8, 12]].", function () {
					expect(insert([[1, 3], [5, 7], [8, 12]], [4, 6])).toEqual([[1, 3], [4, 7], [8, 12]]);
				});
				it("Input: [[2, 3], [5, 7]], newInterval = [1, 4]; Output: [[1, 4], [5, 7]].", function () {
					expect(insert([[2, 3], [5, 7]], [1, 4])).toEqual([[1, 4], [5, 7]]);
				});
			});
		},
		code: function insert(intervals, newInterval) {
			return [];
		},
		solution: function insert(intervals, newInterval) {
			return [];
		}
	});
	jsaw.problem({
		name: 'Intervals Intersection (medium)',
		statement: "Given two lists of intervals, find the intersection of these two lists. Each list consists of disjoint intervals sorted on their start time.",
		examples: "Input: intervals1 = [[1, 3], [5, 6], [7, 9]], intervals2 = [[2, 3], [5, 7]]; Output: [[2, 3], [5, 6], [7, 7]]; Explanation: The output list contains the common intervals between the two lists.",
		test: function (merge) {
			//jasmine style test cases.
			describe(this.name, function () {
				it("Input: intervals1 = [[1, 3], [5, 6], [7, 9]], intervals2 = [[2, 3], [5, 7]]; Output: [[2, 3], [5, 6], [7, 7]].", function () {
					expect(merge([[1, 3], [5, 6], [7, 9]], [[2, 3], [5, 7]])).toEqual([[2, 3], [5, 6], [7, 7]]);
				});
				it("Input: intervals1 = [[1, 3], [5, 7], [9, 12]], intervals2 = [[5, 10]]; Output: [[5, 7], [9, 10]].", function () {
					expect(merge([[1, 3], [5, 7], [9, 12]], [[5, 10]])).toEqual([[5, 7], [9, 10]]);
				});
			});
		},
		code: function merge(intervals1, intervals2) {
			return [];
		},
		solution: function merge(intervals1, intervals2) {
			return [];
		}
	});
	jsaw.problem({
		name: 'Conflicting Appointments (medium)',
		statement: "Given an array of intervals representing 'N' appointments, find out if a person can attend all the appointments.",
		examples: "Input: appointments = [[1, 4], [2, 5], [7, 9]]; Output: false; Explanation: Since [1, 4] and [2, 5] overlap, a person cannot attend both of these appointments.",
		test: function (canAttendAllAppointments) {
			//jasmine style test cases.
			describe(this.name, function () {
				it("Input: appointments = [[1, 4], [2, 5], [7, 9]]; Output: false.", function () {
					expect(canAttendAllAppointments([[1, 4], [2, 5], [7, 9]])).toEqual(false);
				});
				it("Input: appointments = [[6, 7], [2, 4], [8, 12]]; Output: true.", function () {
					expect(canAttendAllAppointments([[6, 7], [2, 4], [8, 12]])).toEqual(true);
				});
				it("Input: appointments = [[4, 5], [2, 3], [3, 6]]; Output: false.", function () {
					expect(canAttendAllAppointments([[4, 5], [2, 3], [3, 6]])).toEqual(false);
				});
			});
		},
		code: function canAttendAllAppointments(appointments) {
			return false;
		},
		solution: function canAttendAllAppointments(appointments) {
			return false;
		}
	});
	jsaw.problem({
		name: 'Minimum Meeting Rooms (hard)',
		statement: "Given a list of intervals representing the start and end time of N meetings, find the minimum number of rooms required to hold all the meetings.",
		examples: "Input: meetings = [[1, 4], [7, 9], [2, 5]]; Output: 2; Explanation: Since [1, 4] and [2, 5] overlap, we need two rooms to hold these two meetings. [7, 9] can occur in any of the two rooms later.",
		test: function (minMeetingRooms) {
			//jasmine style test cases.
			describe(this.name, function () {
				it("Input: meetings = [[1, 4], [7, 9], [2, 5]]; Output: 2.", function () {
					expect(minMeetingRooms([[1, 4], [7, 9], [2, 5]])).toEqual(2);
				});
				it("Input: meetings = [[6, 7], [2, 4], [8, 12]]; Output: 1.", function () {
					expect(minMeetingRooms([[6, 7], [2, 4], [8, 12]])).toEqual(1);
				});
				it("Input: appointments = [[4, 5], [2, 3], [2, 4], [3, 5]]; Output: 2.", function () {
					expect(minMeetingRooms([[4, 5], [2, 3], [2, 4], [3, 5]])).toEqual(2);
				});
			});
		},
		code: function minMeetingRooms(meetings) {
			return 0;
		},
		solution: function minMeetingRooms(meetings) {
			return 0;
		}
	});
	jsaw.problem({
		name: 'Employee Free Time (hard)',
		statement: "For K employees, we are given a list of intervals representing the working hours of each employee. Our goal is to find out if there is a free interval that is common to all employees. You can assume that each list of employee working hours is sorted at the start time.",
		examples: "Input: workingHours =[[[1, 3], [5, 6]], [[2, 3], [6, 8]]]; Output: [3, 5]; Explanation: Both the employees are free between [3, 5].",
		test: function (findEmployeeFreeTime) {
			//jasmine style test cases.
			describe(this.name, function () {
				it("Input: workingHours =[[[1, 3], [5, 6]], [[2, 3], [6, 8]]]; Output: [3, 5].", function () {
					expect(findEmployeeFreeTime([[[1, 3], [5, 6]], [[2, 3], [6, 8]]])).toEqual([3, 5]);
				});
				it("Input: meetings = [[[1, 3],[9, 12]],[[2, 4], [6, 8]]]; Output: [[4, 6], [8, 9]].", function () {
					expect(findEmployeeFreeTime([[[1, 3], [9, 12]], [[2, 4], [6, 8]]])).toEqual([[4, 6], [8, 9]]);
				});
			});
		},
		code: function findEmployeeFreeTime(schedules) {
			return [];
		},
		solution: function findEmployeeFreeTime(schedules) {
			return [];
		}
	});
	//Tree Breadth First Search
	jsaw.problem({
		name: 'Binary Tree Level Order Traversal (easy)',
		statement: "Given a binary tree, populate an array to represent its level-by-level traversal. You should populate the values of all nodes of each level from left to right in separate sub-arrays.",
		examples: "Input: <img src = 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/2009/06/tree12.gif'>; Output: [[1], [2, 3], [4, 5]]",
		test: function (bfsTraverse) {
			//jasmine style test cases.
			describe(this.name, function () {
				it("test", function () {
					let root = new TreeNode(1);
					root.left = new TreeNode(2);
					root.right = new TreeNode(3);
					root.left.left = new TreeNode(4);
					root.left.right = new TreeNode(5);
					root.right.left = new TreeNode(6);
					root.right.right = new TreeNode(7);
					expect(bfsTraverse(root)).toEqual([[1], [2, 3], [4, 5, 6, 7]]);
				});
			});
		},
		code: function bfsTraverse(rootNode) {
			/**
			 *	function TreeNode(value) {
			 *		this.value = value;
			 *		this.left = null;
			 *		this.right = null;
			 *	}
			 */
			return [];
		},
		solution: function bfsTraverse(rootNode) {
			const result = [];
			if (!rootNode) {
				return result;
			}
			const queue = [rootNode];
			while (queue.length > 0) {
				let levelSize = queue.length;
				const currentLevel = [];
				for (let i = 0; i < levelSize; i++) {
					let currentNode = queue.shift();
					currentLevel.push(currentNode.value);
					if (currentNode.left) {
						queue.push(currentNode.left);
					}
					if (currentNode.right) {
						queue.push(currentNode.right);
					}
				}
				result.push(currentLevel);
			}
			return result;
		}
	});
	jsaw.problem({
		name: 'Reverse Level Order Traversal (easy)',
		statement: "Given a binary tree, populate an array to represent its level-by-level traversal in reverse order, i.e., the lowest level comes first. You should populate the values of all nodes in each level from left to right in separate subarrays.",
		examples: "Input: <img src = 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/2009/06/tree12.gif'>; Output: [[4, 5], [2, 3], [1]]",
		test: function (bfsTraverse) {
			//jasmine style test cases.
			describe(this.name, function () {
				it("test", function () {
					let root = new TreeNode(1);
					root.left = new TreeNode(2);
					root.right = new TreeNode(3);
					root.left.left = new TreeNode(4);
					root.left.right = new TreeNode(5);
					root.right.left = new TreeNode(6);
					root.right.right = new TreeNode(7);
					expect(bfsTraverse(root)).toEqual([[4, 5, 6, 7], [2, 3], [1]]);
				});
			});
		},
		code: function bfsTraverse(rootNode) {
			/**
			 *	function TreeNode(value) {
			 *		this.value = value;
			 *		this.left = null;
			 *		this.right = null;
			 *	}
			 */
			return [];
		},
		solution: function bfsTraverse(rootNode) {
			const result = [];
			if (!rootNode) {
				return result;
			}
			const queue = [rootNode];
			while (queue.length > 0) {
				let levelSize = queue.length;
				const currentLevel = [];
				for (let i = 0; i < levelSize; i++) {
					let currentNode = queue.shift();
					currentLevel.push(currentNode.value);
					if (currentNode.left) {
						queue.push(currentNode.left);
					}
					if (currentNode.right) {
						queue.push(currentNode.right);
					}
				}
				result.unshift(currentLevel);
			}
			return result;
		}
	});
	jsaw.problem({
		name: 'Zigzag Traversal (medium)',
		statement: "Given a binary tree, populate an array to represent its zigzag level order traversal. You should populate the values of all nodes of the first level from left to right, then right to left for the next level, and keep alternating in the same manner for the following levels.",
		examples: "Input: <img src = 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/2009/06/tree12.gif'>; Output: [[1], [3, 2], [4, 5]]",
		test: function (bfsTraverse) {
			//jasmine style test cases.
			describe(this.name, function () {
				it("test", function () {
					let root = new TreeNode(1);
					root.left = new TreeNode(2);
					root.right = new TreeNode(3);
					root.left.left = new TreeNode(4);
					root.left.right = new TreeNode(5);
					root.right.left = new TreeNode(6);
					root.right.right = new TreeNode(7);
					expect(bfsTraverse(root)).toEqual([[1], [3, 2], [4, 5, 6, 7]]);
				});
			});
		},
		code: function bfsTraverse(rootNode) {
			/**
			 *	function TreeNode(value) {
			 *		this.value = value;
			 *		this.left = null;
			 *		this.right = null;
			 *	}
			 */
			return [];
		},
		solution: function bfsTraverse(rootNode) {
			return [];
		}
	});
	jsaw.problem({
		name: 'Level Averages in a Binary Tree (easy)',
		statement: "Given a binary tree, populate an array to represent the averages of all of its levels.",
		examples: "Input: <img src = 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/2009/06/tree12.gif'>; Output: [1, 2.5, 4.5]",
		test: function (findLevelAverages) {
			//jasmine style test cases.
			describe(this.name, function () {
				it("test", function () {
					let root = new TreeNode(1);
					root.left = new TreeNode(2);
					root.right = new TreeNode(3);
					root.left.left = new TreeNode(4);
					root.left.right = new TreeNode(5);
					root.right.left = new TreeNode(6);
					root.right.right = new TreeNode(7);
					expect(findLevelAverages(root)).toEqual([1, 2.5, 5.5]);
				});
			});
		},
		code: function findLevelAverages(rootNode) {
			/**
			 *	function TreeNode(value) {
			 *		this.value = value;
			 *		this.left = null;
			 *		this.right = null;
			 *	}
			 */
			return [];
		},
		solution: function findLevelAverages(rootNode) {
			return [];
		}
	});
	jsaw.problem({
		name: 'Minimum Depth of a Binary Tree (easy)',
		statement: "Find the minimum depth of a binary tree. The minimum depth is the number of nodes along the sortest path from the root node to the nearest leaf node.",
		examples: "Input: <img src = 'https://www.ideserve.co.in/learn/img/MinimumDepthOfBinaryTree.gif'>; Output: 3.",
		test: function (findMinimumDepth) {
			//jasmine style test cases.
			describe(this.name, function () {
				it("test", function () {
					let root = new TreeNode(1);
					root.left = new TreeNode(2);
					root.right = new TreeNode(3);
					root.left.left = new TreeNode(4);
					root.left.right = new TreeNode(5);
					expect(findMinimumDepth(root)).toEqual(2);
				});
			});
		},
		code: function findMinimumDepth(rootNode) {
			/**
			 *	function TreeNode(value) {
			 *		this.value = value;
			 *		this.left = null;
			 *		this.right = null;
			 *	}
			 */
			return 0;
		},
		solution: function findMinimumDepth(rootNode) {
			return 0;
		}
	});
	//Tree Depth First Search
	//Two Heaps
	jsaw.problem({
		name: 'Find the Median of a Number Stream (medium)',
		statement: "Design a class to calculate the median of a number stream. The class should have the following two methods: insertNum(int num): stores the number in the class findMedian(); returns the median of all numbers inserted in the class. If the count fo numbers inserted in the class is even, the median will be average of the middle two numbers.",
		examples: "insertNum(3); insertNum(1); findMedian() → output: 2; insertNum(4); findMedian() → output: 3; insertNum(4); findMedian() → output: 3.5.",
		test: function (MedianOfAStream) {
			//jasmine style test cases.
			describe(this.name, function () {
				it("insertNum(3); insertNum(1); findMedian() → output: 2.", function () {
					let object = new MedianOfAStream();
					object.insertNum(3);
					object.insertNum(1);
					expect(object.findMedian()).toEqual(2);
				});
				it("insertNum(3); insertNum(1); insertNum(4); findMedian() → output: 3;", function () {
					let object = new MedianOfAStream();
					object.insertNum(3);
					object.insertNum(1);
					object.insertNum(4);
					expect(object.findMedian()).toEqual(3);
				});
				it("insertNum(3); insertNum(1); insertNum(4); insertNum(4); findMedian() → output: 3.5.", function () {
					let object = new MedianOfAStream();
					object.insertNum(3);
					object.insertNum(1);
					object.insertNum(4);
					object.insertNum(4);
					expect(object.findMedian()).toEqual(3.5);
				});
			});
		},
		code: function MedianOfAStream() {
			this.insertNum = function (num) {};
			this.findMedian = function () {};
		},
		solution: function MedianOfAStream() {
			this.insertNum = function (num) {};
			this.findMedian = function () {};
		}
	});

	//Top K Elements
	jsaw.problem({
		name: "Top 'K' Numbers (easy)",
		statement: "Given an unsorted array of numbers, find the 'k' largest numbers in it.",
		examples: "Input: numbers = [3, 1, 5, 12, 2, 11], k = 3; Output: [5, 12, 11].",
		test: function (findKlargestNumbers) {
			//jasmine style test cases.
			describe(this.name, function () {
				it("Input: numbers = [3, 1, 5, 12, 2, 11], k = 3; Output: [5, 12, 11].", function () {
					expect(findKlargestNumbers([3, 1, 5, 12, 2, 11], 3)).toEqual([5, 12, 11]);
				});
			});
		},
		code: function findKlargestNumbers(nums, k) {
			return [];
		},
		solution: function findKlargestNumbers(nums, k) {
			return [];
		}
	});
	jsaw.problem({
		name: "Top K Frequent Numbers (medium)",
		statement: "Given an unsorted array of numbers, find the top 'K' frequently occurring numbers in it.",
		examples: "Input: [1, 3, 5, 12, 11, 12, 11], k = 2; Output: [12, 11]; Explanation: Both 11 and 12 appeared twice.",
		test: function (findKFrequentNumber) {
			//jasmine style test cases.
			describe(this.name, function () {
				it("Input: numbers = [1, 3, 5, 12, 11, 12, 11], k = 2; Output: [12, 11].", function () {
					expect(findKFrequentNumber([1, 3, 5, 12, 11, 12, 11], 2)).toEqual([12, 11]);
				});
			});
		},
		code: function findKFrequentNumber(nums, k) {
			return [];
		},
		solution: function findKFrequentNumber(nums, k) {
			return [];
		}
	});
	jsaw.problem({
		name: "Kth Largest Number in a Stream (medium)",
		statement: "Design a class to efficiently find the Kth largest element in a stream of numbers. The class should have the following two things: 1. The constructor of the class should accept an integer array containing initial numbers from the stream and an integer K. 2. The class should expose a function add(int num) which will store the given number and return the Kth largest number.",
		examples: "Input: nums = [3, 1, 5, 12, 2, 11], k = 4. Calling add(6) should return 5; Calling add(13) should return 6;Calling add(4) should return 6.",
		test: function (KthLargestNumberInStream) {
			//jasmine style test cases.
			describe(this.name, function () {
				describe("Input: nums = [3, 1, 5, 12, 2, 11], k = 4.", function () {
					var test = new KthLargestNumberInStream([3, 1, 5, 12, 2, 11], 4);
					it("1. Calling add(6) should return 5.", function () {
						expect(test.add(6)).toEqual(5);
					});
					it("2. Calling add(13) should return 6.", function () {
						expect(test.add(13)).toEqual(6);
					});
					it("3. Calling add(4) should return 6.", function () {
						expect(test.add(4)).toEqual(6);
					});
				});
			});
		},
		code: function KthLargestNumberInStream(nums, k) {
			this.add = function (num) {
				return 0;
			};
		},
		solution: function KthLargestNumberInStream(nums, k) {
			return [];
		}
	});
	//K-way Merge
	jsaw.problem({
		name: "Merge K Sorted Lists (medium)",
		statement: "Given an array of sorted LinkedLists, merge them into one sorted array.",
		examples: "L1 = 2->6->8, L2 = 3->6->7, L3 = 1->3->4; Input: lists = [root1, root2, root3]; Output: [1, 2, 3, 3, 4, 6, 6, 7, 8].",
		test: function (mergeLists) {
			//jasmine style test cases.
			describe(this.name, function () {
				it("L1 = 2->6->8, L2 = 3->6->7, L3 = 1->3->4; Input: lists = [root1, root2, root3]; Output: [1, 2, 3, 3, 4, 6, 6, 7, 8].", function () {
					let l1 = new ListNode(2);
					l1.next = new ListNode(6);
					l1.next.next = new ListNode(8);

					let l2 = new ListNode(3);
					l2.next = new ListNode(6);
					l2.next.next = new ListNode(7);

					let l3 = new ListNode(1);
					l3.next = new ListNode(3);
					l3.next.next = new ListNode(4);

					expect(mergeLists([l1, l2, l3])).toEqual([1, 2, 3, 3, 4, 6, 6, 7, 8]);
				});
			});
		},
		code: function mergeLists(lists) {
			return [];
		},
		solution: function mergeLists(lists) {
			return [];
		}
	});
	jsaw.problem({
		name: "Merge K Sorted Arrays (medium)",
		statement: "Given an array of sorted Arrays, merge them into one sorted array.",
		examples: "Input: lists = [[2, 6, 8], [3, 6, 7], [1, 3, 4]]; Output: [1, 2, 3, 3, 4, 6, 6, 7, 8].",
		test: function (mergeArrays) {
			//jasmine style test cases.
			describe(this.name, function () {
				it("Input: lists = [[2, 6, 8], [3, 6, 7], [1, 3, 4]]; Output: [1, 2, 3, 3, 4, 6, 6, 7, 8].", function () {
					expect(mergeArrays([[2, 6, 8], [3, 6, 7], [1, 3, 4]])).toEqual([1, 2, 3, 3, 4, 6, 6, 7, 8]);
				});
			});
		},
		code: function mergeArrays(arrays) {
			return [];
		},
		solution: function mergeArrays(arrays) {
			return [];
		}
	});
	jsaw.problem({
		name: "Kth Smallest Number in M Sorted Lists (medium)",
		statement: "Given 'M' sorted arrays, find the Kth smallest number among all the arrays.",
		examples: "Input: lists = [[2, 6, 8], [3, 6, 7], [1, 3, 4]]; k = 5; Output: 4; Explanation: The 5th smallest number among all the array is 4, this can be verfied from the merged list of all the arrays: [1, 2, 3, 3, 4, 6, 6, 7, 8].",
		test: function (findKthSmallest) {
			//jasmine style test cases.
			describe(this.name, function () {
				it("Input: lists = [[2, 6, 8], [3, 6, 7], [1, 3, 4]]; k = 5.", function () {
					expect(findKthSmallest([[2, 6, 8], [3, 6, 7], [1, 3, 4]], 5)).toEqual(4);
				});
			});
		},
		code: function findKthSmallest(lists, k) {
			return 0;
		},
		solution: function findKthSmallest(lists, k) {
			return 0;
		}
	});
	jsaw.problem({
		name: "Kth Smallest Number in a Sorted Matrix (hard)",
		statement: "Given an N*N matrix where each row and column is sorted in ascending order, find the Kth smallest element in the matrix.",
		examples: "Input: matrix =[[2, 6, 8],[3, 7, 10],[5, 8, 11]]; k = 5; Output: 7; Explanation: The 5th smallest number in the matrix is 7.",
		test: function (findKthSmallest) {
			//jasmine style test cases.
			describe(this.name, function () {
				it("Input: matrix =[[2, 6, 8],[3, 7, 10],[5, 8, 11]]; k = 5; Output: 7.", function () {
					expect(findKthSmallest([[2, 6, 8], [3, 7, 10], [5, 8, 11]], 5)).toEqual(7);
				});
			});
		},
		code: function findKthSmallest(matrix, k) {
			return 0;
		},
		solution: function findKthSmallest(matrix, k) {
			return 0;
		}
	});
	jsaw.problem({
		name: "Smallest Number Range (hard)",
		statement: "Given 'M' sorted arrays, find the smallest range that includes at least one number from each of the 'M' lists.",
		examples: "Input: lists = [[1, 5, 8], [4, 12], [7, 8, 10]]; Output: [4, 7]; Explanation: The range [4, 7] includes 5 from nums1, 4 from nums2, and 7 from nums3.",
		test: function (findSmallestRange) {
			//jasmine style test cases.
			describe(this.name, function () {
				it("Input: lists = [[1, 5, 8], [4, 12], [7, 8, 10]]; Output: [4, 7].", function () {
					expect(findSmallestRange([[1, 5, 8], [4, 12], [7, 8, 10]])).toEqual([4, 7]);
				});
			});
		},
		code: function findSmallestRange(lists) {
			return [];
		},
		solution: function findSmallestRange(lists) {
			return [];
		}
	});
	//Depth First Search (DFS)
	jsaw.problem({
		name: 'Binary Tree Path Sum (easy)',
		statement: "Given a binary tree and a number 'S', find if the tree has a path from root-to-leaf such that the sum of all the node values of that path equals 'S'.",
		examples: "Input: tree = <img src = 'https://media.geeksforgeeks.org/wp-content/uploads/BST_sum.png'>, s = 164; Output: true; Explanation: 45 + 38 + 41 + 40 = 164.",
		test: function (findPath) {
			//jasmine style test cases.
			describe(this.name, function () {
				it("1 + 2 + 5 = 8.", function () {
					let root = new TreeNode(1);
					root.left = new TreeNode(2);
					root.right = new TreeNode(3);
					root.left.left = new TreeNode(4);
					root.left.right = new TreeNode(5);
					expect(findPath(root, 8)).toEqual(true);
				});
			});
		},
		code: function findPath(rootNode, s) {
			/**
			 *	function TreeNode(value) {
			 *		this.value = value;
			 *		this.left = null;
			 *		this.right = null;
			 *	}
			 */
			return false;
		},
		solution: function findPath(rootNode, s) {
			/**
			 *	function TreeNode(value) {
			 *		this.value = value;
			 *		this.left = null;
			 *		this.right = null;
			 *	}
			 */
			if (rootNode.value === s && rootNode.left === null && rootNode.right === null) {
				return true
			}
			let result1 = false;
			if (rootNode.left) {
				result1 = findPath(rootNode.left, s - rootNode.value)
			}
			let result2 = false;
			if (rootNode.right) {
				result2 = findPath(rootNode.right, s - rootNode.value)
			}
			return result1 || result2;
		}
	});
	jsaw.problem({
		name: 'All Paths for a Sum (medium)',
		statement: "Given a binary tree and a number 's', find all paths from root-to-leaf such that the sum of all the node values of each path equals 's'.",
		examples: "Input: tree = <img src = 'https://media.geeksforgeeks.org/wp-content/uploads/BST_sum.png'>, s = 164; Output: 1; Explanation: There is only one path with sum 164: 45 + 38 + 41 + 40 = 164.",
		test: function (findPaths) {
			//jasmine style test cases.
			describe(this.name, function () {
				it("1 + 2 + 5 = 8; 1 + 3 + 4 = 8;", function () {
					let root = new TreeNode(1);
					root.left = new TreeNode(2);
					root.right = new TreeNode(3);
					root.left.left = new TreeNode(4);
					root.left.right = new TreeNode(5);
					root.right.left = new TreeNode(4);
					expect(findPaths(root, 8)).toEqual(2);
				});
			});
		},
		code: function findPaths(rootNode, s) {
			/**
			 *	function TreeNode(value) {
			 *		this.value = value;
			 *		this.left = null;
			 *		this.right = null;
			 *	}
			 */
			return 0;
		},
		solution: function findPaths(rootNode, s) {
			return 0;
		}
	});
	jsaw.problem({
		name: 'Sum of Path Numbers (medium)',
		statement: "Given a binary tree where each node can only have a digit (0-9) value, each root-to-leaf path will represent a number. Find the total sum of all the numbers represented by all paths.",
		examples: "Input: tree = <img src = 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/2009/06/tree12.gif'>; Output: 262; Explanation: The sum of all path numbers: 124 + 125 + 13 = 262.",
		test: function (findSumOfPathNumbers) {
			//jasmine style test cases.
			describe(this.name, function () {
				it("124 + 125 + 134 = 383.", function () {
					let root = new TreeNode(1);
					root.left = new TreeNode(2);
					root.right = new TreeNode(3);
					root.left.left = new TreeNode(4);
					root.left.right = new TreeNode(5);
					root.right.left = new TreeNode(4);
					expect(findSumOfPathNumbers(root)).toEqual(383);
				});
			});
		},
		code: function findSumOfPathNumbers(rootNode) {
			/**
			 *	function TreeNode(value) {
			 *		this.value = value;
			 *		this.left = null;
			 *		this.right = null;
			 *	}
			 */
			return 0;
		},
		solution: function findSumOfPathNumbers(rootNode) {
			return 0;
		}
	});
	jsaw.problem({
		name: 'Path With Given Sequence (medium)',
		statement: "Given a binary tree and a number sequence, find if the sequence is present as a root-to-leaf path in the given tree.",
		examples: "Input: tree = <img src = 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/2009/06/tree12.gif'>, sequence = [1, 2, 5]; Output: true; Explanation: The tree has a path 1->2->5;",
		test: function (findPath) {
			//jasmine style test cases.
			describe(this.name, function () {
				it("test", function () {
					let root = new TreeNode(1);
					root.left = new TreeNode(2);
					root.right = new TreeNode(3);
					root.left.left = new TreeNode(4);
					root.left.right = new TreeNode(5);
					root.right.left = new TreeNode(6);
					root.right.right = new TreeNode(7);
					expect(findPath(root, [1, 2, 5])).toEqual(true);
				});
			});
		},
		code: function findPath(rootNode, sequence) {
			/**
			 *	function TreeNode(value) {
			 *		this.value = value;
			 *		this.left = null;
			 *		this.right = null;
			 *	}
			 */
			return false;
		},
		solution: function findPath(rootNode, sequence) {
			return false;
		}
	});


	//Dynamic Programming
	//0/1 Knapsack
	jsaw.problem({
		name: '0/1 Knapsack',
		statement: "Given two integer arrays to represent weights and profits of 'N' items, we need to find a subset of these items which will give us maximum profit such that their cumulative weight is not more than a given number 'C'. Each item can only be selected once, which means either we put an item in the knapsack or we skip it.",
		examples: "Input: profits = [4, 5, 3, 7], weights = [2, 3, 1, 4], capacity = 5; Output: 10; Explanation: profits[2] + profits[3] = 10, weights[2] + weights[3] = 5.",
		test: function (solveKnapsack) {
			describe(this.name, function () {
				it("Input: profits = [4, 5, 3, 7], weights = [2, 3, 1, 4], capacity = 5; Output: 10. ", function () {
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
		name: 'Equal Subset Sum Partition',
		statement: 'Given a set of positive numbers, find if we can partition it into two subsets such that the sum of elements in both the subsets is equal.',
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
	jsaw.problem({
		name: 'Minimum Subset Sum Difference',
		statement: "Given a set of positive numbers, partition the set into two subsets with a minimum difference between their subset sums.",
		examples: "Input: numbers = [1, 2, 3, 9], Output: 3, Explanation: We can partition the given set into two subsets where minimum absolute difference between the sum of numbers is '3'. Following are the two subsets: [1, 2, 3] & [9].",
		test: function (canPartition) {
			describe(this.name, function () {
				it("Input: numbers = [1, 2, 3, 9], Output: 3.", function () {
					let result = canPartition([1, 2, 3, 9]);
					expect(result).toEqual(3);
				});
				it("Input: [1, 2, 7, 1, 5], Output: 0.", function () {
					let result = canPartition([1, 2, 7, 1, 5]);
					expect(result).toEqual(0);
				});
				it("Input: [1, 3, 100, 4], Output: 92.", function () {
					let result = canPartition([1, 3, 100, 4]);
					expect(result).toEqual(92);
				});
			});
		},
		code: function canPartition(numbers) {
			return 0;
		},
		solution: function canPartition(numbers) {
			return 0;
		}
	});
	jsaw.problem({
		name: 'Count of Subset Sum',
		statement: "Given a set of positive numbers, find the total number of subsets whose sum is equal to a given number 's'.",
		examples: "Input: numbers = [1, 1, 2, 3], s = 4; Output: 3, Explanation: The given set has '3' subsets whose sum is '4': [1, 1, 2], [1, 3], and [1, 3].",
		test: function (countSubsets) {
			describe(this.name, function () {
				it("Input: numbers = [1, 1, 2, 3], s = 4; Output: 3.", function () {
					let result = countSubsets([1, 1, 2, 3], 4);
					expect(result).toEqual(3);
				});
				it("Input: numbers = [1, 2, 7, 1, 5], s = 9; Output: 3.", function () {
					let result = countSubsets([1, 2, 7, 1, 5], 9);
					expect(result).toEqual(3);
				});
			});
		},
		code: function countSubsets(numbers, s) {
			return 0;
		},
		solution: function countSubsets(numbers, s) {
			return 0;
		}
	});
	jsaw.problem({
		name: 'Target Sum',
		statement: "Given a set of positive numbers (non zero) and a target sum 's'. Each number should be assigned either a '+' or '-' sign. We need to find out total ways to assign symbols to make the sum of numbers equal to target 's'.",
		examples: "Input: numbers = [1, 1, 2, 3], s = 1; Output: 3, Explanation: The given set has '3' ways to make a sum of '1': +1-1-2+3 = 1, -1+1-2+3 = 1, +1+1+2-3 = 1.",
		test: function (findTargetSubsets) {
			describe(this.name, function () {
				it("Input: numbers = [1, 1, 2, 3], s = 1; Output: 3.", function () {
					let result = findTargetSubsets([1, 1, 2, 3], 1);
					expect(result).toEqual(3);
				});
				it("Input: numbers = [1, 2, 7, 1], s = 9; Output: 2.", function () {
					let result = findTargetSubsets([1, 2, 7, 1], 9);
					expect(result).toEqual(2);
				});
			});
		},
		code: function findTargetSubsets(numbers, s) {
			return 0;
		},
		solution: function findTargetSubsets(numbers, s) {
			return 0;
		}
	});
	//Unbounded Knapsack
	jsaw.problem({
		name: 'Unbounded Knapsack',
		statement: "Given two integer arrays to represent weights and profits of 'N' items, we need to find a subset of these items which will give us maximum profit such that their cumulative weight is not more than a given number 'C'. We can assume an infinite supply of item quantities; therefore, each item can be selected multiple times.",
		examples: "Input: profits = [15, 20, 50], weights = [1, 2, 3], capacity = 5; Output: 80; Explanation: 2*profits[0] + profits[2] = 10, 2*weights[0] + weights[2] = 5.",
		test: function (solveKnapsack) {
			describe(this.name, function () {
				it("Input: profits = [15, 20, 50], weights = [1, 2, 3], capacity = 5; Output: 80.", function () {
					expect(solveKnapsack([15, 20, 50], [1, 2, 3], 5)).toEqual(80);
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
		name: 'Rod Cutting',
		statement: "Given a rod of length n, we are asked to cut the rod and sell the pieces in a way that will maximize the profit. We are also given the price of every piece of length i where 1 <= i <=n.",
		examples: "Input: lengths = [1, 2, 3, 4, 5], prices = [2, 6, 7, 10, 13], rodLength = 5; Output: 14; Explanation: 2 pieces of length 2, 1 piece of length 1.",
		test: function (solveRodCutting) {
			describe(this.name, function () {
				it("Input: lengths = [1, 2, 3, 4, 5], prices = [2, 6, 7, 10, 13], rodLength = 5; Output: 14.", function () {
					expect(solveRodCutting([1, 2, 3, 4, 5], [2, 6, 7, 10, 13], 5)).toEqual(14);
				});
			});
		},
		code: function solveRodCutting(lengths, prices, n) {
			return 0;
		},
		solution: function solveRodCutting(lengths, prices, n) {
			return 0;
		}
	});
	jsaw.problem({
		name: 'Coin Change',
		statement: "Given an infinite supply of n coin denominations and a total money amount, we are asked to find the total number of distinct ways to make up that amount.",
		examples: "Input: denominations = [1, 2, 3], total = 5; Output: 5; Explanation: There are five ways to make the change for 5: [1, 1, 1, 1, 1], [1, 1, 1, 2], [1, 1, 3], [1, 2, 2], and [2, 3].",
		test: function (coinChange) {
			describe(this.name, function () {
				it("Input: denominations = [1, 2, 3], total = 5; Output: 5.", function () {
					expect(coinChange([1, 2, 3], 5)).toEqual(5);
				});
			});
		},
		code: function coinChange(denominations, total) {
			return 0;
		},
		solution: function coinChange(denominations, total) {
			return 0;
		}
	});
	jsaw.problem({
		name: 'Minimum Coin Change',
		statement: "Given an infinite supply of n coin denominations and a total money amount, we are asked to find the minimum number of coins needed to make up that amount.",
		examples: "Input: denominations = [1, 2, 3], total = 5; Output: 2; Explanation: We need minimum of two coins [2, 3] to make a total of 5.",
		test: function (coinChange) {
			describe(this.name, function () {
				it("Input: denominations = [1, 2, 3], total = 5; Output: 2.", function () {
					expect(coinChange([1, 2, 3], 5)).toEqual(2);
				});
				it("Input: denominations = [1, 2, 3], total = 11; Output: 4.", function () {
					expect(coinChange([1, 2, 3], 11)).toEqual(4);
				});
			});
		},
		code: function coinChange(denominations, total) {
			return 0;
		},
		solution: function coinChange(denominations, total) {
			return 0;
		}
	});
	jsaw.problem({
		name: 'Maximum Ribbon Cut',
		statement: "Given a number array to represent possible ribbon lengths and a total ribbon length n, we need to find the maximum number of pieces that the ribbon can be cut into.",
		examples: "Input: n = 5, ribbonLengths = [2, 3, 5]; Output: 2; Explanation: Ribbon pieces will be [2, 3].",
		test: function (cutRibbon) {
			describe(this.name, function () {
				it("Input: n = 5, ribbonLengths = [2, 3, 5]; Output: 2.", function () {
					expect(cutRibbon(5, [2, 3, 5])).toEqual(2);
				});
				it("Input: n = 7, ribbonLengths = [2, 3]; Output: 3.", function () {
					expect(cutRibbon(7, [2, 3])).toEqual(3);
				});
			});
		},
		code: function cutRibbon(n, ribbonLengths) {
			return 0;
		},
		solution: function cutRibbon(n, ribbonLengths) {
			return 0;
		}
	});
	//Fibonacci Numbers
	//Minimum Jumps to Reach the End missing
	jsaw.problem({
		name: 'Fibonacci Numbers',
		statement: "Write a function to calculate the nth Fibonacci number.",
		examples: "Input: num = 7; Output: 8; Explanation: 0, 1, 1, 2, 3, 5, 8.",
		test: function (fibonacci) {
			describe(this.name, function () {
				it("Input: num = 7; Output: 8.", function () {
					expect(fibonacci(7)).toEqual(8);
				});
			});
		},
		code: function fibonacci(n) {
			return 0;
		},
		solution: function fibonacci(n) {
			return 0;
		}
	});
	jsaw.problem({
		name: 'Staircase',
		statement: "Given a stair with n steps, implement a method to count how many possible ways are there to reach the top of the staircase, given that, at every step you can either take 1 step, 2 steps, or 3 steps.",
		examples: "Input: stairs = 3; Output: 4; Explanation: Following are the 4 ways we can climb: [1, 1, 1], [1, 2], [2, 1], [3].",
		test: function (countWays) {
			describe(this.name, function () {
				it("Input: stairs = 3; Output: 4.", function () {
					expect(countWays(3)).toEqual(4);
				});
				it("Input: stairs = 4; Output: 5.", function () {
					expect(countWays(4)).toEqual(5);
				});
			});
		},
		code: function countWays(stairs) {
			return 0;
		},
		solution: function countWays(stairs) {
			return 0;
		}
	});
	jsaw.problem({
		name: 'Number Factors',
		statement: "Given a number n, implement a method to count how many possible ways there are to express n as the sum of 1, 3, or 4.",
		examples: "Input: n = 4; Output: 4; Explanation: Following are the 4 ways we can express n: [1, 1, 1, 1], [1, 3], [3, 1], [4].",
		test: function (countWays) {
			describe(this.name, function () {
				it("Input: n = 4; Output: 4.", function () {
					expect(countWays(4)).toEqual(4);
				});
				it("Input: stairs = 5; Output: 6.", function () {
					expect(countWays(5)).toEqual(6);
				});
			});
		},
		code: function countWays(n) {
			return 0;
		},
		solution: function countWays(n) {
			return 0;
		}
	});
	jsaw.problem({
		name: 'Minimum Jumps with Fee',
		statement: "Given a staircase with n steps and an array of n numbers representing the fee that you have to pay if you take the step. Implement a method to calculate the minimum fee required to reach the top of the staircase(beyond the top-most step). At every step, you have an option to take either 1 step, 2 steps, or 3 steps. You should assume that you are standing at the first step.",
		examples: "Number of stairs: 6; Input: fees = [1, 2, 5, 2, 1, 2]; Output: 3; Explanation: Starting from index 0, we can reach the top through: 0->3->top, The total fee we have to pay will be 1+2=3.",
		test: function (findMiniFee) {
			describe(this.name, function () {
				it("Input: fees = [1, 2, 5, 2, 1, 2]; Output: 3.", function () {
					expect(findMiniFee([1, 2, 5, 2, 1, 2])).toEqual(3);
				});
				it("Input: fees = [2, 3, 4, 5]; Output: 5.", function () {
					expect(findMiniFee([2, 3, 4, 5])).toEqual(5);
				});
			});
		},
		code: function findMiniFee(fees) {
			return 0;
		},
		solution: function findMiniFee(fees) {
			return 0;
		}
	});
	jsaw.problem({
		name: 'House Thief',
		statement: "There are n houses built in a line. A thief wants to steal maximum possible money from these houses. The only restriction the thief has is that he can't steal from two consecutive houses, as that would alert the security system. How should the thief maximize his stealing? Given a number array representing the wealth of n houses, determine the maximum amount of money the thief can steal without alerting the security system.",
		examples: "Input: wealths = [2, 5, 1, 3, 6, 2, 4]; Output: 15; Explanation: The thief should steal from houses 5+6+4 = 15",
		test: function (findMaxSteal) {
			describe(this.name, function () {
				it("Input: wealths = [2, 5, 1, 3, 6, 2, 4]; Output: 15.", function () {
					expect(findMaxSteal([2, 5, 1, 3, 6, 2, 4])).toEqual(15);
				});
				it("Input: fees = [2, 10, 14, 8, 1]; Output: 18.", function () {
					expect(findMaxSteal([2, 10, 14, 8, 1])).toEqual(18);
				});
			});
		},
		code: function findMaxSteal(wealths) {
			return 0;
		},
		solution: function findMaxSteal(wealths) {
			return 0;
		}
	});

	//Palindromic Subsequence
	jsaw.problem({
        name: 'Longest Palindromic Subsequence',
        statement: "Given a sequence, find the length of its longest Palindromic Subsequence(LPS).",
        examples: "Input: str = 'abdbca'; Output: 5; Explanation: LPS is 'abdba'.",
        test: function (lps) {
            describe(this.name, function () {
                it("Input: str = 'abdbca'; Output: 5;", function () {
                    expect(lps('abdbca')).toEqual(5);
                });
				it("Input: str = 'cddpd'; Output: 3;", function () {
                    expect(lps('cddpd')).toEqual(3);
                });
				it("Input: str = 'pqr'; Output: 1;", function () {
                    expect(lps('pqr')).toEqual(1);
                });
            });
        },
        code: function lps(str) {
            return 0;
        },
        solution: function lps(str) {
            return 0;
        }
    });
	//Longest Palindromic Substring
	jsaw.problem({
        name: 'Longest Palindromic Substring',
        statement: "Given a string, find the length of its longest Palindromic Substring, In a palindromic string, elements read the same backward and forward.",
        examples: "Input: str = 'abdbca'; Output: 3; Explanation: LPS is 'bdb'.",
        test: function (lps) {
            describe(this.name, function () {
                it("Input: str = 'abdbca'; Output: 3;", function () {
                    expect(lps('abdbca')).toEqual(3);
                });
				it("Input: str = 'cddpd'; Output: 3;", function () {
                    expect(lps('cddpd')).toEqual(3);
                });
				it("Input: str = 'pqr'; Output: 1;", function () {
                    expect(lps('pqr')).toEqual(1);
                });
            });
        },
        code: function lps(str) {
            return 0;
        },
        solution: function lps(str) {
            return 0;
        }
    });
})(jsaw);
