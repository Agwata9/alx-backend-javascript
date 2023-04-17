// the use of the var and let
export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {  
    var task = true;
    var task2 = false;
  }

  return [task, task2];
}
