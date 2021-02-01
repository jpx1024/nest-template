import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

const YAML_CONFIG_FILENAME = 'bootstrap.yml';

export default () => {
    var target = yaml.load(
        readFileSync(join(__dirname, "resources", YAML_CONFIG_FILENAME), 'utf8'),
    );
    
    // 创建配置文件对象
    if(process.env.npm_lifecycle_event != "start") {
        target = Object.assign(target, {
            nest: {
                profiles: {
                    active: ''
                }
            }
        });
    }else{
        return target;
    }

    // 判断启动参数，并赋值方案
    switch (process.env.npm_lifecycle_event) {
        case "start:dev":
            target.nest.profiles.active = "dev";
            break;
        case "start:test":
            target.nest.profiles.active = "test";
            break;
        case "start:prod":
            target.nest.profiles.active = "prod";
            break;
    }

    // 加载对象
    var source = yaml.load(
        readFileSync(join(__dirname, "resources", "bootstrap-" + target.nest.profiles.active + ".yml"), 'utf8'),
    );

    const config = Object.assign(target, source);
    return config
};