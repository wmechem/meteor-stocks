Meteor.methods({
  getName: function(symbol){
      var data = YahooFinance.snapshot({
        symbols: [symbol],
        fields: ['s', 'n']
      });
      //console.log(data[0].name)
      
      if(data[0].name){
        //console.log('Found name');
        return data[0].name;};
      //console.log('Name not found')
      return 'N/A'
  },

  getData: function(symbol){
    var end = new Date();
    var start = new Date(end);
    start.setDate(start.getDate() - 365);

    return YahooFinance.historical({
      symbol: symbol,
      from: start,
      to: end
    });
  }
});
