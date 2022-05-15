describe("Payments test (with setup and tear-down between tests)", function () {
    beforeEach(function () {
        billAmtInput.value = 200;
        tipAmtInput.value = 40;
    });

    //submitPaymentInfo() tests
    it('should add new payment when using submitPaymentInfo()', function () {
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('200');
        expect(allPayments['payment1'].tipAmt).toEqual('40');
        expect(allPayments['payment1'].tipPercent).toEqual(20);
    });

    it('should not add a new payment on empty submit using submitPaymentInfo()', function () {
        billAmtInput.value = '';
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(0);
    });

    // createCurPayment() tests
    it('should create a new payment using createCurPayment()', function () {
        let expectedPayment = {
            billAmt: '200',
            tipAmt: '40',
            tipPercent: 20,
        }

        expect(createCurPayment()).toEqual(expectedPayment);
    });
    it('should not create payment with empty input using createCurPayment()', function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        let curPayment = createCurPayment();

        expect(curPayment).toEqual(undefined);
    });

    //appendPaymentTable(curPayment) tests
    it('should append payment and X to payment table using appendPaymentTable()', function () {
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;

        appendPaymentTable(curPayment);

        let curTdList = document.querySelectorAll('#paymentTable tbody tr td');

        expect(curTdList.length).toEqual(4);
        expect(curTdList[0].innerText).toEqual('$200');
        expect(curTdList[1].innerText).toEqual('$40');
        expect(curTdList[2].innerText).toEqual('20%');
        expect(curTdList[3].innerText).toEqual('X');
    });

    afterEach(function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        paymentId = 0;
        allPayments = {};
    });
});