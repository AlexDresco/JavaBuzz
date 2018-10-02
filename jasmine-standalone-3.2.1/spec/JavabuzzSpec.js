//
// require './lib/fizzbuzz'
//
// describe 'fizzbuzz' do
//   it 'returns "fizz" when passed 3' do
//     expect(fizzbuzz(3)).to eq 'fizz'
//   end
//
//   it 'returns "buzz" when passed 5' do
//     expect(fizzbuzz(5)).to eq "buzz"
//   end
//
//   it 'return itself when passed 1' do
//     expect(fizzbuzz(1)).to eq 1
//   end
//
//   it "returns 'fizzbuzz' when passed 15" do
//     expect(fizzbuzz(15)).to eq "fizzbuzz"
//   end
//
// end

describe("Fizzbuzz", function() {
  it("should return fizz when passed 3", function() {
    expect(Fizzbuzz(3)).toEqual("fizz");
  });
  it("Should return buzz when passed 5", function(){
    expect(Fizzbuzz(5)).toEqual('buzz');
  });
  it ("Should return itself when passed 1", function(){
    expect(Fizzbuzz(1)).toEqual(1);
  });
  it ("Should return fizzbuzz when passed 15", function(){
    expect(Fizzbuzz(15)).toEqual('fizzbuzz');
  });
  it ("Should return itself when passed 7", function(){
    expect(Fizzbuzz(7)).toEqual(7);
  });
  it ("Should return itself when passed 7", function(){
    expect(Fizzbuzz(6)).toEqual('fizz');
  });
});
