const Moralis = require('moralis/node');

Moralis.Cloud.define(
  "recordDepositEvents",
  async (request) => {
    const depositEvents = request.params.events;
    const eventIds = depositEvents.map((evt) => evt.id);
    const query = new Moralis.Query("DepositHistory");
    query.containedIn("eventId", eventIds);
    const existingRecords = await query.find();
    const existingEventIds = existingRecords.map((record) => record.get('eventId'));

    // Filter new events
    const newEvents = depositEvents.filter((evt) => existingEventIds.indexOf(evt.id) === -1)
    if (newEvents.length === 0) {
      return 0;
    }
    
    // Bulk write new events to the history table
    const bulkDataToInsert = newEvents.map((evt) => ({
      account: evt.account,
      eventId: evt.id,
      block_hash: evt.block_hash,
      amount: evt.gameCoinAmount
    }))
    await Moralis.bulkWrite('DepositHistory', bulkDataToInsert);
    return newEvents.length;
  },
  {
    fields: ["events"],
    requireUser: true,
  }
);

