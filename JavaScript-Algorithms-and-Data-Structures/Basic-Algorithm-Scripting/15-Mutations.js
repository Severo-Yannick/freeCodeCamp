function mutation([target, test]) {
  for (let i = 0; i < test.length; i++) {
    if (target.toLowerCase().indexOf(test[i].toLowerCase()) < 0) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);
