describe("Servers test (with setup and tear-down)", function () {
    beforeEach(function () {
        // initialization logic
        serverNameInput.value = 'Alice';
    });
    //submitServerInfo() tests
    it('should add a new server to allServers on submitServerInfo()', function () {
        submitServerInfo();

        expect(Object.keys(allServers).length).toEqual(1);
        expect(allServers['server' + serverId].serverName).toEqual('Alice');
    });

    it('should not add a new server if there is no input in submitServerInfo()', function () {
        serverNameInput.value = '';
        submitServerInfo();

        expect(Object.keys(allServers).length).toEqual(0);
    });
    //updateServerTable() tests
    it('should update table when using updateServerTable()', function () {
        submitServerInfo();
        updateServerTable();

        let serverTable = document.querySelectorAll('#serverTable tbody tr td');

        expect(serverTable.length).toEqual(3);
        expect(serverTable[0].innerText).toEqual('Alice');
        expect(serverTable[1].innerText).toEqual('$0.00');
        expect(serverTable[2].innerText).toEqual('X');
    });


    afterEach(function () {
        serverTbody.innerHTML = '';
        serverId = 0;
        allServers = {};
    });
});
