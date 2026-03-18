import Text "mo:core/Text";

actor {
  public type ShopInfo = {
    name : Text;
    phone : Text;
    address : Text;
  };

  public shared ({ caller }) func getShopInfo() : async ShopInfo {
    {
      name = "The Dogs Bar";
      phone = "+1234567890";
      address = "100 Main Street, Dogtown";
    };
  };
};
