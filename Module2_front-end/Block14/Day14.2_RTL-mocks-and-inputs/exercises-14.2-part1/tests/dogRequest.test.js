

 let { fetchApi } = require('../functions/dogRequest');

describe('Exercise 5', () => {
  fetchApi = jest.fn();
  it('tests the cases of Promisse resolved', () => {
    const url = 'request success';
    fetchApi.mockResolvedValue(url);
    const receivedUrl = fetchApi();
    expect(receivedUrl).resolves.toBe(url)
    expect(fetchApi).toHaveBeenCalled();
  });
  it('tests the case of Promise rejected', () => {
    const url = 'request failed';
    fetchApi.mockRejectedValue(url);
    const receivedUrl = fetchApi();
    expect(receivedUrl).rejects.toBe(url)
    expect(fetchApi).toHaveBeenCalled();
  });
})