QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 <= "3", "1<3 - the first agrument is 'truthy', so we pass!");
});

QUnit.test('Testing Higher', function (assert) {
    assert.equal(process(6,3), "Lower!");    
});

QUnit.test('Testing Lower', function (assert) {
    assert.equal(process(6,12), "Higher!");    
});

QUnit.test('Testing Equal', function (assert) {
    assert.equal(process(6,6), "Correct!");    
});