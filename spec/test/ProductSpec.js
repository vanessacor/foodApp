describe("Given an", function () {
    
    it("should return a new product", function () {
      const product = new Product("Paella", "9€", "Sea food rise");
  
      expect(product.name).toEqual("Paella");
      expect(product.price).toEqual("9 euros");
      expect(product.quantity).toEqual(1);
      expect(product.description).toEqual("Sea food rice");
      


    });
   
  });