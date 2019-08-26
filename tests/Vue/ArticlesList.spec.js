import { shallow, shallowMount, mount } from 'vue-test-utils';
import expect from 'expect';
import ArticleList from '@/js/components/ArticleList';
import moxios from 'moxios';

describe('ArticleList', () =>
{
    beforeEach(() =>
    {
        moxios.install(axios);
    });

    afterEach(() =>
    {
        moxios.uninstall(axios);
    });

    it('Checking created hook', () =>
    {
        expect(typeof ArticleList.created).toBe('function');
    });

    it('Setting mocking articles', () =>
    {
        expect(typeof ArticleList.data).toBe('function');
        const defaultData = ArticleList.data();
        expect(defaultData.articles).toBeNull;
    });

    it('loads articles from API /articles endpoint', (done) =>
    {
        const wrapper = mount(ArticleList);

        moxios.stubRequest('/api/articles', {
            status: 200,
            response: {
                "data": [{
                    "_id": "5d639d17168c48675b798232",
                    "title": "Tomorrowland",
                    "content":
                        "Mattis felis curae mi ante sodales conubia gravida, eget nec mauris torquent netus proin integer nam, volutpat diam semper rutrum ullamcorper arcu.",
                    "slug": "tomorrowland",
                    "creation_date": {
                        "date": "2019-08-28 08:49:27.649200",
                        "timezone_type": 3,
                        "timezone":
                            "UTC"
                    }
                }]
            }
        });

        moxios.wait(() =>
        {
            expect(wrapper.find('Tomorrowland'));
            done()
        });
    });


});
