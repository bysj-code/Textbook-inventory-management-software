using SqlSugar;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Xiezn.Core.Common.Helpers;
using Xiezn.Core.Models;
using Xiezn.Core.Models.DbModel;


namespace Xiezn.Core.Business.Services
{
    public class JiaocaichukuService : BaseService<JiaocaichukuDbModel>
    {
        private readonly long _uid;
        private readonly string _role;

        public JiaocaichukuService()
        {
            try
            {
                if (CacheHelper.TokenModel != null)
                {
                    _uid = CacheHelper.TokenModel.Uid;
                    _role = CacheHelper.TokenModel.Role;
                }
            }
            catch
            {
                _uid = 0;
                _role = "游客";
            }
        }






        public PageModel<JiaocaichukuDbModel> GetPageList(int page, int limit, string sort, string order, List<IConditionalModel> conModels)
        {
            PageModel pageModel = new PageModel() { PageIndex = page, PageSize = limit };

            int totalNumber = 0;
            int totalPage = 0;

            string dbColumnName = Db.EntityMaintenance.GetDbColumnName<JiaocaichukuDbModel>(sort);
            order = order.ToLower() == "asc" ? "ASC" : "DESC";


            List<JiaocaichukuDbModel> ts = Db.Queryable<JiaocaichukuDbModel>().Where(conModels).OrderBy(dbColumnName + " " + order).ToPageList(page, limit, ref totalNumber, ref totalPage);

            //foreach (var item in ts)
            //{
                //item.Chukushijian = item.Chukushijian.ObjToString("yyyy-MM-dd");
            //}            

            PageModel<JiaocaichukuDbModel> t = new PageModel<JiaocaichukuDbModel>()
            {
                Code = ResponseCodeEnum.Success,
                Data = new Page<JiaocaichukuDbModel>()
                {
                    Total = totalNumber,
                    PageSize = limit,
                    TotalPage = totalPage,
                    CurrPage = page,
                    List = ts
                }
            };

            return t;
        }








    }
}
