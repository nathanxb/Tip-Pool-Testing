describe("Helpers test (with setup and tear-down between tests)", function () {
    beforeEach(function () {
        billAmtInput.value = 200;
        tipAmtInput.value = 40;
        submitPaymentInfo();
    });
    //sumPaymentTotal() tests
    it('should add all totals together sumPaymentTotal()', function () {
        expect(sumPaymentTotal('billAmt')).toEqual(200);

        billAmtInput.value = 100;
        tipAmtInput.value = 20;

        submitPaymentInfo();

        expect(sumPaymentTotal('billAmt')).toEqual(300);
    });

    it('should add all tips of the payments made using sumPaymentTotal()', function () {
        expect(sumPaymentTotal('tipAmt')).toEqual(40);

        billAmtInput.value = 100;
        tipAmtInput.value = 20;

        submitPaymentInfo();

        expect(sumPaymentTotal('tipAmt')).toEqual(60);
    });


    it('should add total tip percent when using sumPaymentTotal()', function () {
        expect(sumPaymentTotal('tipPercent')).toEqual(20);

        billAmtInput.value = 100;
        tipAmtInput.value = 20;

        submitPaymentInfo();

        expect(sumPaymentTotal('tipPercent')).toEqual(40);
    });
    //calculateTipPercent tests
    it('should show tip percent of a individual tips while using calculateTipPercent()', function () {
        expect(calculateTipPercent(400, 100)).toEqual(25);
        expect(calculateTipPercent(100, 36)).toEqual(36);
        expect(calculateTipPercent(500, 0)).toEqual(0);
    });
    //apendTd tests
    it('should append a new column on appendTd(tr, value)', function () {
        let newTr = document.createElement('tr');

        appendTd(newTr, 'test');

        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('test');
    });
    //apendDeleteBtn test
    it('should append delete button to entries when using appendDeleteBtn(tr, type)', function () {
        let newTr = document.createElement('tr');

        appendDeleteBtn(newTr);

        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('X');
    });

    afterEach(function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
    });
});