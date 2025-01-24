import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Int "mo:base/Int";
import Float "mo:base/Float";
actor DBank{
  stable var currentValue : Float = 300;
  // currentValue := 100; //

  // let id = 55645656; // id are immutable
  // Debug.print(debug_show (id));

  Debug.print("Hello");
  Debug.print(debug_show (currentValue));

  public func topUp(amount: Float){
    currentValue += amount;
    Debug.print(debug_show (currentValue));
  };

  public func withdrawl(amount: Float){
    let tempValue: Float = currentValue - amount;
    if (tempValue >= 0 ){
      currentValue -= amount;
      Debug.print(debug_show (currentValue));
    }else {
      Debug.print("amount > current value");
    }
  };

  public query func checkBalance(): async Float {
    return currentValue;
  };

  stable var startTime : Int = Time.now();
  Debug.print(debug_show (startTime));

  public func compund(){
    let currentTime = Time.now();
    let timeElapsedNS = currentTime - startTime;
    let timeElapsedS = timeElapsedNS / 1000_000_000;
    currentValue := currentValue * (1.01 ** Float.fromInt(timeElapsedS));
    startTime := currentTime;
  };

};
